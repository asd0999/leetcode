class Solution:
    roman_map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }
    def romanToInt(self, s: str) -> int:
        total = 0
        for i in range(len(s)):
            curr_int=self.roman_map.get(s[i])
            if (i < len(s)-1):
                next_int = self.roman_map.get(s[i+1])
            else: 
                next_int = 0
            
            if (curr_int >= next_int):
                total += curr_int
            else:
                total -= curr_int
                
        return total
                

class Solution2:
    def romanToInt(self, s: str) -> int:
        roman = s
        lst = list(s)
        sum = 0
        for i in range (len(lst)):
            if lst[i]=='I':
                if i==len(lst)-1:
                    sum+=1
                elif (lst[i+1]!='V') and (lst[i+1]!='X'):
                    sum+=1
                else: sum-=1
            elif lst[i]=='V':
                sum+=5
            elif lst[i]=='X':
                if i==len(lst)-1:
                    sum+=10
                elif (lst[i+1]!='L') and (lst[i+1]!='C'):
                    sum+=10
                else: sum-=10
            elif lst[i]=='L':
                sum+=50
            elif lst[i]=='C':
                if i==len(lst)-1:
                    sum+=100
                elif (lst[i+1]!='D') and (lst[i+1]!='M'):
                    sum+=100
                else:
                    sum-=100
            elif lst[i]=='D':
                sum+= 500
            elif lst[i]=='M':
                sum+=1000
        return sum
