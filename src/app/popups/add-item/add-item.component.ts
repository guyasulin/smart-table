import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/index.reducer';
import { Item } from 'src/app/model/item';
import * as fromItemAction from '../../store/item.actions';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  public message: string;
  private acceptedFileTypes: string[] = [".jpg", ".jpeg", ".png", ".tiff", ".img"];
  public thumbnailUrl:string;
  public item = new Item();

  constructor(
    public dialogRef: MatDialogRef<AddItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Item,
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  add(newItem) {
    newItem.form.value.thumbnailUrl = this.item.thumbnailUrl;
    this.store.dispatch(fromItemAction.addItem({ item:newItem.form.value}));
    this.dialogRef.close();
  }

  preview(files) {
    if (files.length === 0)
      return;
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
    var reader = new FileReader();
    this.acceptedFileTypes = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.item.thumbnailUrl = reader.result;
    }
  }
}
