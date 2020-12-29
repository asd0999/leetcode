class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x<0:
            return False
        else:
            s=str(x)
            s_rev=s[::-1]
            i = int(s)
            i_rev = int(s_rev)
            if i-i_rev == 0:
                return True
            else:
                return False
