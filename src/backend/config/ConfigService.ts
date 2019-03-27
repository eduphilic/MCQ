import { Injectable } from "@nestjs/common";
import { ConfigModel } from "./ConfigModel";
import { isStaging } from "./isStaging";

@Injectable()
export class ConfigService {
  /**
   * Returns the server and application configuration. The values returned
   * contain sensitive server information and should not be exposed directly.
   */
  getServerConfig(): ConfigModel {
    return {
      // spell-checker:disable
      recaptcha: {
        secret_key: "6LfE44wUAAAAACXTTT_FhLXDoRk4sZxbF3tPqLal",
      },
      session: {
        expire_milliseconds: 1209600000,
        key: "Nus9NV50s5Am",
      },
      serviceAccount: isStaging
        ? {
            type: "service_account",
            project_id: "joinuniformindia-test",
            private_key_id: "386f4954025e3418e0f1a80e8ac615d9e9b17fbd",
            private_key:
              "-----BEGIN PRIVATE KEY-----\nMIIEugIBADANBgkqhkiG9w0BAQEFAASCBKQwggSgAgEAAoIBAQCiKeghOxO15wpR\nzhuQzZUXSXOnb1Q0fZECXqR96tyvOiCHbmiw4D/j75RCxX93MjWD7dPSaiQTsSRG\nvR3xE41MIlFLcjz6+Kt8XjF5Hdu4Wv3ePrUi0Ouzq3MyKWco9TJc+RZAsIu7fWf2\n0eqXY6GxcLfZ08oNtWcoRk7tt10stdCCIv1kVRXVQ2wtq34Ipu4Sg2hRv9zqUlEF\nRsYWmo/0sSCCZ+Fb68T85w8P0LvxQeQr+zEYAcz3+vpM048U4QsI7IRROyqeV1Tr\nUCw29qqGDueBuPeyADhk8ceYe7/Oq54r62KgUC12JLwWIs5MpjuEsa7q3mponELJ\nhYNU5LjtAgMBAAECggEABZ0XKytTekBDJ0ppjuCaN1unrfvYubANGIlnmIpMVTtZ\nMlPPbcWqWiNXI3aY/B3YJDbticLhEj0Kgr5iO0NQTvqzJYr3WT+WSon4nKo8pHJv\nh/i6WYTk9YVkyZXZ7qnwskij86pVs/0nEuOSabPQizpAZKe3WDRXtVlPVMOJU+Mk\n29hC5IiX5RnWiRzHiNikHXLnqGni0kN7XXA2VvJH+XDtP6m4IdIs6igpBdL6v+T/\nVaa+2rDSaSQHvATSwh2MF5SaRYr76AZKlxahfONFWfUn3VCoOJfI83i87e4hC8bP\nrOpA1LS+ptCbT9R4lbnZKhS+EjwmpVMFCB7Har19CwKBgQDSWBxMna5IQXW3Rr35\njhx2oO00EYbcxo8B1lHpcDUJNhGWH2OGxdk1yM09giVuK3rGELxWVZmjZ2WEV6ZL\nPpKrLhGYTVV9vdLhOHOS1SsI1EZANQnOJFufecFZO08FJhWnO1dAOvnZ/2wNK+ow\ncGy8G2PpUE3coVj2+DMcKZxBLwKBgQDFXJ8N2NIEfGWVyVEglwB6nZp1GQ/vI/Fv\nX9dhGy7/7qXTsFPITqe9tmZk4QYWJTlMDKKPLNQ02l2BmOasxh/Q2YY1BH0rLYUG\nmJQ0JrSv1ID8gh9vGilwWKrw+tP+lml/8nLUgcxWvZy38B/nLDaNvRv4P7b3enTk\n793QBI5IowKBgB1BSfZR+/pquE+cVDHQVR8etL8ILQSpzRwJTe00wPud/IYvqW0G\nOXakjf8fCcuv2myPyVIMp8i1ScZFVoiilE2go6vWHazWaO0QJ+rlIQ4iT/8AIXP9\nVIzypzSc7hmeOWa/9xuk2Dk8sC+IyxKfoE/tU1EQ7TNhcXkv/hPNqcDbAoGAaR+4\nqMuAslsAURR2XgGQg79G8nBzCFIA2+4U7uhn1HLtaSBWwC8FMgvh5oHlmA4jwtpI\nDDM4pR5bCBjFZenyMHBtB/hoI4OPg7/p0Q182Ns8CUPWMnug7vKLuugf20+Kylf9\nyiuJB/rfaypAFAZ82GqOZ2CouJFFilwprg9/KjkCfwgopmmPd9H/8fZ1WSqoa5gl\nOfAd6GwNsEhxe5W4HmJH3qm5ZxFTJF8pM/WuWIOcZxnVrI80W6fsLCi0T+KwAv8t\njgiOE3cJMXLfTLO4CW+BsmuR5UstO1AsdhsMgNQXJwqfxaj8FTekrs71m888sYza\nDL5sFmyZXwqDivaY5yM=\n-----END PRIVATE KEY-----\n",
            client_email:
              "firebase-adminsdk-b4wzs@joinuniformindia-test.iam.gserviceaccount.com",
            client_id: "107975582017726878691",
            auth_uri: "https://accounts.google.com/o/oauth2/auth",
            token_uri: "https://oauth2.googleapis.com/token",
            auth_provider_x509_cert_url:
              "https://www.googleapis.com/oauth2/v1/certs",
            client_x509_cert_url:
              "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-b4wzs%40joinuniformindia-test.iam.gserviceaccount.com",
          }
        : {
            type: "service_account",
            project_id: "joinuniformindia",
            private_key_id: "4ac45679b20b6a61f33605b41783b77c0ae3cd6a",
            private_key:
              "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDAaet3TEGhzawk\n9hyRxG/e0GHGgO7NS6tXNBeHBF1M8yFeFxVrn9mmT83t2v6wzTh83UNyv1Rgtu6m\nod3Ew5kKRFn4NgFOgtu9SRMgvqnz+yq+/+8knHtm1T2ZengUOHvnJhd3HCwZWwRP\nWMpgUOoBw8RI3BuOm/98RfgxFWvxja6Gz+m6GrvzhQpa8T9eq/FV2SF4nx9NVPnz\nlohoqJzNAwojuXav1vUYO53n5N45V1Po3daZVC8xwsm4VaJkAfIXimz4TJLr1sTH\nZe7Ok/oT1oqoaNS8awV/B6OfLLcUexNY/HzDrvpSmjNMbWjGPwlRMU09u9drqkkJ\nmdmLrSOrAgMBAAECggEAVyxFqSVLwN4ZBR/ZfrL0Cgr3mULVrf3/0QDBPgLcsF2g\neuvTYRCpP199iSsD457+XheylJyZQj3urmC8RAZn4g5ognsZKXRA0Kd4OogXIHnk\n+maidkBM6iBnCY9CMssKW4VW8Tg6xHwHXll4Sp2t/wGt/mJ2O6xyWd+rW7V8U5FX\naXl84XyytvBDgU5HvWwg8vwU9H6QvzNqKTfSDbb3ir4Wj0o3of0Q7w0WRlCFMpxt\nULfuHgcCQ7z1FFCFUwvQbbgA4ypV0u8xAedHSNGgGtN1Ufglr04zzkXC1vBM5qDh\nBA/ORJMe09bkBea+PNWSsS390K0wfnNiQg7k8eBzLQKBgQDf+L4DwGAo/jzKHg8q\niAkSLsXxSb8Jht8d2/PUAphOS0D8xwlghgmhcUwHqBEuUiRqmY1XOke4eUr1s2I2\n+rJIL39CLmu7yDT/b1irYWPWXRXE+7Q/HxdXioMxrCF41iIKwAY4QJ5r7pNxb7by\nMrs/hmmD3cQ067P56TG1uT+qhwKBgQDb7eQuc8SmxBgLu8vkbbC+3vOh2by8svgO\nsHpUcJu0c5hjWsaSyt9GLMZjYWGURvDVQPlUoMts7rc8ZjF0IccQzRDkJ956YaU+\n/I+0NcMnYO71fRCZ8pCdUJ3we+zvE7Woj9meQmV3avKuoNbdCy5dl646DMuSEcYq\nl2SyBstSvQKBgF81KvkHRxlF8ettWb8Xstty3JwUYEwZdDEKNh0yuTHXFZoeteK9\nN8zUD6DVlfAd5PMXsRiaYrCNhwrpJV//s9exsSQd/ZgGpFjNKWE49irCySVCZj3K\n5q5E6D4uUNBAHpp5RGuXNIDnGvBGr/tHC4gWiDYRCH4CkDA1K/d29xRzAoGAVoXN\nqnTDHfSxnRQhz9lTmpPt93PI69fg/S5ywfuXVjPP9O6GhsOneV0uI3TxRbtvDgbE\n0IV94no7vlhaBl0viq2SgqAox67YquIDyxsHjtt0x0GPoXErcaiAqlamzRvM8Oa+\n76MhdgyuMwN15Hp8oDeHRLE5+VpiwujSpbNElGUCgYBh20vnCZqzIpv+ZRxrP46F\nub0pJ4eibcv27ZGUQAaB5mrwsqcvMUuIvNaGd/D0yLYaIKEYzqJdw36DzLus5S9P\no4d3eV64Z8YifzaP0NVobd8SLg7EkHzY+j9T1ZR4J3R1bELp26Yhgps/Ov+hYtph\n0Y1P6ZkTEKe0J9m2hTCRwQ==\n-----END PRIVATE KEY-----\n",
            client_email:
              "firebase-adminsdk-a5g58@joinuniformindia.iam.gserviceaccount.com",
            client_id: "105098343987528636412",
            auth_uri: "https://accounts.google.com/o/oauth2/auth",
            token_uri: "https://oauth2.googleapis.com/token",
            auth_provider_x509_cert_url:
              "https://www.googleapis.com/oauth2/v1/certs",
            client_x509_cert_url:
              "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-a5g58%40joinuniformindia.iam.gserviceaccount.com",
          },
      databaseURL: isStaging
        ? "https://joinuniformindia-test.firebaseio.com"
        : "https://joinuniformindia.firebaseio.com",
      // spell-checker:enable
    };
  }
}
