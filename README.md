# Hosting a static website on AWS S3 with CDN

This project involves hosting a simple rock-papers-scissors as a static website using AWS S3 and a CDN (CloudFront). Below is a summary of the steps I took to set this up.

## What I Did

### 1. **Created an S3 Bucket**
   - **Bucket Name**: `rock-paper-scissors-aladdin`
   - **Region**: `us-east-1` (N. Virginia)
   - **Bucket Type**: General Purpose (recommended for most use cases)
   - **Bucket Settings**: Enabled static website hosting and set `index.html` as the index document.

![2](https://github.com/user-attachments/assets/932d7a33-7ca5-4d9b-a3ae-8bd74bc4c821)


### 2. **Uploaded Website Files**
   - **Files Uploaded**:
     - `index.html`
     - `style.css` (in the `styles/` folder)
     - `script.js` (in the `scripts/` folder)
     - Images (in the `img/` folder):
   - **Permissions**: Made all files publicly accessible for the website to function.

![4](https://github.com/user-attachments/assets/d2533995-4dc1-401f-8400-c00b6ddf6c33)


### 3. **Enabled Static Website Hosting**
   - Enabled static website hosting in the S3 bucket settings.
   - Set `index.html` as the default index document.
   - Adjusted the **Block Public Access** settings to allow public read access to the bucket and its contents.

![6](https://github.com/user-attachments/assets/91ace084-2657-4837-b3db-57bc5d57338c)

![7](https://github.com/user-attachments/assets/0281a061-236f-40ed-8f69-a979ea3d316a)

### 4. **Configured CDN with CloudFront**
   - Created a CloudFront distribution to serve the website content globally with low latency.
   - Set the S3 bucket as the origin for the CloudFront distribution.

![11](https://github.com/user-attachments/assets/3ebf6339-6af1-45c6-acfe-776ad3a13cfe)

![12](https://github.com/user-attachments/assets/6cb6da1d-060e-4207-bb2b-067f29996727)

### 5. **Verified Website Accessibility**
   - Accessed the website using the CloudFront distribution URL.

![13](https://github.com/user-attachments/assets/63867d1e-9da8-41da-866a-eed866620124)
