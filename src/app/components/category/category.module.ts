import { NgModule } from "@angular/core";
import { CategoryComponent } from "./category.component";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";

@NgModule({
    declarations: [CategoryComponent],
    imports: [CommonModule, IonicModule],
    exports: [CategoryComponent],
})

export class CategoryModule {}