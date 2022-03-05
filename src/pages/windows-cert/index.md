# Install app certificates on Windows

:::info

To run app package that are not coming from Microsoft Store, a certificate need to be installed on the machine beforehands.

:::

Following are the steps to install certificate for IIUM Schedule app.

1. Right click the installer to open **Properties**. Then, go to the **Digital Signatures** tab.

   ![properties](./screenshots/2022-03-05-174051.png)

2. Double click on the certificate

   ![certlist](./screenshots/2022-03-05-174110.png)

3. Then, click on the <kbd>View Certificate</kbd>

   ![view-cert](./screenshots/2022-03-05-174020.png)

4. Click on the <kbd>Install Certificate...</kbd>

   ![install-cert](./screenshots/2022-03-05-174014.png)

5. A **Certificate Import Wizard** will pop up. In the store location, change to **Local Machine**.

   ![wizard](./screenshots/2022-03-05-174006.png)

6. Change from the first option to the second option that says **Place all certificates in the following store**. Then, click on <kbd>Browse...</kbd>

   ![certificate-choose](./screenshots/2022-03-05-173916.png)

7. A popup window will shows displaying all the machine's certificate folder. Select the **Trusted Root Certification Authorities**. Then, click <kbd>OK</kbd>

   ![cert folder chooser](./screenshots/2022-03-05-173745.png)

8. Click <kbd>Next</kbd>

   ![cert next](./screenshots/2022-03-05-173908.png)

9. Click <kbd>Finish</kbd>

   ![Finishing the certificate installer](./screenshots/2022-03-05-173738.png)

10. A dialog will shows indicates your certificate installation is successful. Click <kbd>OK</kbd> to close it.

    ![dialog successful](./screenshots/2022-03-05-173732.png)

11. Close all the properties & certificate windows.

12. Last but not least, run the installer again. There should be no error message etc. Click on <kbd>Install</kbd> to finish the installation.

    ![install msix package no error](./screenshots/2022-03-05-173709.png)
