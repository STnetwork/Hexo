---
date: 
title: Office365 Azure AD Connect - Manually match On Premise AD-user to existing
  Office365 user
excerpt: ''
tags:
- Azure AD Connect
- Azure AD
- Office365

---
```powershell
ldifde -d “DistinguishedName of the user : example : CN=user,OU=test,OU=Users,test=DC=test,DC=local” -f “c:\temp\exporteduser.txt”
```

tt

