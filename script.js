require('dotenv').config();

const prompt = require('prompt-sync')({sigint: true});
const fs = require('fs');

const FormData = require('form-data');
const { abort } = require('process');
const accessToken = process.env.ACCESS_TOKEN;
const canvasDomain = "https://feu.instructure.com/api/v1";
let courseId = prompt("Enter the course ID: ");
const assignmentEndPoint = `${canvasDomain}/courses/${courseId}/assignments?access_token=${accessToken}`
const submissionEndPoint = `${canvasDomain}/courses/${courseId}/assignments/3183500/submissions`;

console.log("1 - List assignments\n2 - Submit an assignment")
let choice = prompt("Enter choice: ")



switch (choice) {
    case "1":
        fetch(assignmentEndPoint) 
            .then(response => response.json()) 
            .then(assignments => {
                for (const assignment of assignments) {
                    console.log(assignment.id)
                    console.log(assignment.name)
                    console.log(assignment.due_at)
                    console.log("------------------------------------------")
                    
                }
            })

    break
        
    case "2":
        let filePath = prompt("Enter the full path to the file: ");
        if (!fs.existsSync(filePath)) {
    console.log("File not found!");
    process.exit(1);
}

(async () => {
    try {
        // STEP 1: Request upload URL
        const params = new URLSearchParams({
            'submission[submission_type]': 'online_upload',
            'submission[file_ids][]': ''
        });

        const uploadResponse = await fetch(submissionEndPoint, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: params    
        });

        const uploadData = await uploadResponse.json();

        if (!uploadData.upload_url || !uploadData.upload_params) {
            console.log('Failed to get upload URL: ', uploadData);
            return;
        }

        // STEP 2: Upload file
        const form = new FormData();
        const uploadParams = uploadData.upload_params;

        for (const key in uploadParams) {
            form.append(key, uploadParams[key]);
        }

        form.append('file', fs.createReadStream(filePath));

        const finalUpload = await fetch(uploadData.upload_url, {
            method: 'POST',
            body: form
        });

        const text = await finalUpload.text();
        console.log('Upload response:', text);
        console.log('File submitted successfully!');
    } catch (err) {
        console.error('Error during upload: ', err);
    }
})(); 
     break
    



}



