---
date: null
title: >-
  Azure AD Connect - Manually match On Premise AD-user to existing Office365
  user
excerpt: ''
tags:
  - powershell
  - azure ad connect
  - azure ad
  - office365
_template: blog_post
---




![](/images/office365_powershell_2.png)

```powershell
ldifde -d “DistinguishedName of the user : example : CN=user,OU=test,OU=Users,test=DC=test,DC=local” -f “c:\temp\exporteduser.txt”
```

{% zoom /images/export_user.png [LDIFDE Export] %}

```powershell
set-msoluser -userprincipalname user@example.com -ImmutableID tutCmzWErE+zYRZlFzK/1A==
```

---------------
Note: If doesn't work from the first time. probably the ImmutableID is already set to a user. When you trying to set the ImmutableID, you will receive an error.

```powershell
Get-MsolUser -All | Where-Object {$_.ImmutableID -eq “tutCmzWErE+zYRZlFzK/1A==”}
```

Same result, but for the deleted users. Hard delete the user in Office 365 and you can set the ImmutableID for the correct user :

```powershell
Get-MsolUser -All -ReturnDeletedUsers | Where-Object {$_.ImmutableID -eq “tutCmzWErE+zYRZlFzK/1A==”}
```

```powershell
Remove-MsolUser -UserPrincipalName user@example.com -RemoveFromRecycleBin
```
