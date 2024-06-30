import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  constructor(
    private platform: Platform,
    private camera: Camera,
    private fileTransfer: FileTransfer
  ) { }

  // Method to take a photo using device camera or select from gallery
  takePhoto(): Observable<string> {
    return from(this.platform.ready().then(() => {
      return new Promise<string>((resolve, reject) => {
        const options: CameraOptions = {
          quality: 80,
          destinationType: this.camera.DestinationType.FILE_URI,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE,
          correctOrientation: true,
          sourceType: this.camera.PictureSourceType.CAMERA // Change to PHOTOLIBRARY for gallery
        };

        this.camera.getPicture(options).then((imageUri) => {
          resolve(imageUri);
        }, (err) => {
          reject(err);
        });
      });
    }));
  }

  // Method to upload photo to server
  uploadPhoto(imageUri: string, uploadUrl: string): Observable<string> {
    return from(this.platform.ready().then(() => {
      return new Promise<string>((resolve, reject) => {
        const options: FileUploadOptions = {
          fileKey: 'file',
          fileName: imageUri.substr(imageUri.lastIndexOf('/') + 1),
          chunkedMode: false,
          mimeType: 'image/jpeg'
        };

        const fileTransfer: FileTransferObject = this.fileTransfer.create();

        fileTransfer.upload(imageUri, uploadUrl, options).then((data) => {
          resolve(data.response);
        }, (err) => {
          reject(err);
        });
      });
    }));
  }
}

