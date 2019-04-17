import { Injectable } from '@angular/core';
import {fbService, firebase} from "./fb.service";
import {Upload} from "../models/upload";


@Injectable({
  providedIn: 'root'
})
export class UploadService {

    constructor(private _fb: fbService) {
    }

    public getUploadRequest(data) {
        return this._fb.getUpload(data);
    }
}


export class UploadService {

    constructor(private af: AngularFire, private db: AngularFireDatabase) {
    }

    private basePath: string = '/uploads';
    uploads: FirebaseListObservable<Upload[]>;

    pushUpload(upload: Upload) {
        let storageRef = firebase.storage().ref();
        let uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);

        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
            (snapshot) => {
                // upload in progress
                upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            },
            (error) => {
                // upload failed
                console.log(error)
            },
            () => {
                // upload success
                upload.url = uploadTask.snapshot.downloadURL
                upload.name = upload.file.name
                this.saveFileData(upload)
            }
        );
    }

    // Writes the file details to the realtime db
    private saveFileData(upload: Upload) {
        // this.db.list(`${this.basePath}/`).push(upload);
    }

}
