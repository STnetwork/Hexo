---
date: 2021-03-13T00:00:00+01:00
title: Office365 - PowwerShell - Update User Info CSV
excerpt: ''
tags:
- powershell
- office365

---
![](/images/office365_powershell_2.png)

```powershell
Import-Csv "import.csv" | ForEach {Set-MsolUser -UserPrincipalName $_.EMAIL_ADDRESS -DisplayName $_.DisplayName -FirstName $_.FirstName -LastName $_.LastName -StreetAddress $_.StreetAddress -City $_.City -PostalCode $_.PostalCode -Phone $_.Phone -MobilePhone $_.MobilePhone -Country $_.CountryOrRegion}
```

![](/images/csv.png)