
def reverseString(s):
    """
    :type s: str
    :rtype: str
    """
    hold = []
    for i in range(len(s)-1, -1, -1):
        hold.append(s[i])
    return "".join(hold)
print(reverseString('hello'))
