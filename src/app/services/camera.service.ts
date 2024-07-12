import { Injectable } from '@angular/core';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  constructor(private camera: Camera) { }
  async takePicture(): Promise<string> {
    try {
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        correctOrientation: true,
        targetWidth: 600,
        targetHeight: 600
      };

      const imageData = await this.camera.getPicture(options);
      return 'data:image/jpeg;base64,' + imageData;
    } catch (error) {
      console.error('Error taking picture', error);
      throw error;
    }
  }
}

