import { Locator } from "@playwright/test";
import * as path from "path";

export class FileUploadUtil {

    async uploadFile(fileInput: Locator, fileName: string) {

        const filePath = path.join(
            process.cwd(),
            'testdata',
            fileName
        );

        
        console.log("Uploading:", filePath);

        

        console.log("the new locator is:", fileInput )
       await fileInput.setInputFiles(filePath)

        
    }
}