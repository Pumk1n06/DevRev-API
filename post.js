import axios from "axios";

const url = 'https://api.devrev.ai/works.create';
const token = ''; // Replace <PAT> with your actual personal access token

axios.post(url,
        {
            "type": "issue",
            "applies_to_part": "yes",
            "owned_by": [
                "org"
            ],
            "title": "new_issue"
        }, {
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            }}
   )
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });
