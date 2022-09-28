function generateLicenseLink(licenseCode, includeLicenseAttr) {
    var licenseList = ['CC-BY', 'CC-BY-NC', 'CC-BY-SA', 'CC-BY-ND', 'CC-BY-NC-SA', 'CC-BY-NC-ND'];
    var licenseTextList = ['Creative Commons Attribution License',
        'Creative Commons Attribution-NonCommercial License',
        'Creative Commons Attribution-ShareAlike License',
        'Creative Commons Attribution-NoDerivs License',
        'Creative Commons Attribution-NonCommercial-ShareAlike License',
        'Creative Commons Attribution-NonCommercial-NoDerivs License'];
    var licenseCode = licenseCode.toLowerCase

    if (licenseList.indexOf(licenseCode) < 0) {
        if (includeLicenseAttr == true) {
            return <a rel="license" href="https://choosealicense.com/no-permission/">All Rights Reserved</a>
        }
        else {
            return <a href="https://choosealicense.com/no-permission/">All Rights Reserved</a>
        }
    }
    if (licenseList.indexOf(licenseCode) = 0) {
        licenseCode = licenseCode.toLowerCase.substring(3,);
        if (includeLicenseAttr == true) {
            return <a rel="license" href="http://creativecommons.org/licenses/by-nc/3.0/">licenseTextList[0]</a>
        }
        else {
            return <a rel="license" href="http://creativecommons.org/licenses/by-nc/3.0/">licenseTextList[0]</a>
        }
    }

}