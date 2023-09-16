---
date: 2021-03-12T23:00:00.000Z
title: 'Office365 - Bulk Update User Info CSV PowerShell '
excerpt: ''
tags:
  - powershell
  - office365
_template: blog_post
---




![](/images/office365_powershell_2.png)

```powershell
Import-Csv "import.csv" | ForEach {Set-MsolUser -UserPrincipalName $_.EMAIL_ADDRESS -DisplayName $_.DisplayName -FirstName $_.FirstName -LastName $_.LastName -StreetAddress $_.StreetAddress -City $_.City -PostalCode $_.PostalCode -Phone $_.Phone -MobilePhone $_.MobilePhone -Country $_.CountryOrRegion}
```

{% zoom /images/csv.png [CSV Model Office365 User Info] %}
