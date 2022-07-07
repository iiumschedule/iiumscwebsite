# Install app certificates on Windows

:::info

To run an app package that is not coming from Microsoft Store, a certificate needs to be installed on the machine beforehand.

:::

Following are the steps to install the bundled certificate for the IIUM Schedule app.

1. Right-click the installer (`.msix` file) to open its **Properties**. Then, go to the **Digital Signatures** tab.

   ![properties](./screenshots/2022-03-05-174051.png)

2. Double click on the certificate

   ![certlist](./screenshots/2022-03-05-174110.png)

3. Then, click on the <kbd>View Certificate</kbd>

   ![view-cert](./screenshots/2022-03-05-174020.png)

4. Click on the <kbd>Install Certificate...</kbd>

   ![install-cert](./screenshots/2022-03-05-174014.png)

5. A **Certificate Import Wizard** will pop up. In the store location, change to **Local Machine**.

   ![wizard](./screenshots/2022-03-05-174006.png)

6. Click the **Place all certificates in the following store** button. Then, click on <kbd>Browse...</kbd>

   ![certificate-choose](./screenshots/2022-03-05-173916.png)

7. A popup window will show displaying all the machine's certificate folders. Select the **Trusted Root Certification Authorities**. Then, click <kbd>OK</kbd>

   ![cert folder chooser](./screenshots/2022-03-05-173745.png)

8. Click <kbd>Next</kbd>

   ![cert next](./screenshots/2022-03-05-173908.png)

9. Click <kbd>Finish</kbd>

   ![Finishing the certificate installer](./screenshots/2022-03-05-173738.png)

10. A dialog will show to indicate the certificate installation is successful. Click <kbd>OK</kbd> to close it.

    ![dialog successful](./screenshots/2022-03-05-173732.png)

11. Close all the properties & certificate windows.

12. Finally, **re-run the installer**. There should be no error message etc. Click on <kbd>Install</kbd> to finish the installation.

    ![install msix package no error](./screenshots/2022-03-05-173709.png)
