// import axios from "axios";

// const url = 'https://api.devrev.ai/works.create';
// const token = ''; // Replace <PAT> with your actual personal access token

// axios.post(url,
//         {
//             "type": "issue",
//             "applies_to_part": "yes",
//             "owned_by": [
//                 "org"
//             ],
//             "title": "new_issue"
//         }, {
//             headers: {
//                 'Authorization': token,
//                 'Content-Type': 'application/json'
//             }}
//    )
//     .then(response => {
//         console.log(response.data);
//     })
//     .catch(error => {
//         console.error(error);
//     });
import axios from "axios";

const url = 'https://api.devrev.ai/works.create';
const token = 'eyJhbGciOiJSUzI1NiIsImlzcyI6Imh0dHBzOi8vYXV0aC10b2tlbi5kZXZyZXYuYWkvIiwia2lkIjoic3RzX2tpZF9yc2EiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiamFudXMiXSwiYXpwIjoiZG9uOmlkZW50aXR5OmR2cnYtaW4tMTpkZXZvLzJjbEw5NzVKR0c6ZGV2dS8xIiwiZXhwIjoxODEwMzgxMTIzLCJodHRwOi8vZGV2cmV2LmFpL2F1dGgwX3VpZCI6ImRvbjppZGVudGl0eTpkdnJ2LXVzLTE6ZGV2by9zdXBlcjphdXRoMF91c2VyL2xpbmtlZGlufDZZT1lCUm9pX0ciLCJodHRwOi8vZGV2cmV2LmFpL2F1dGgwX3VzZXJfaWQiOiJsaW5rZWRpbnw2WU9ZQlJvaV9HIiwiaHR0cDovL2RldnJldi5haS9kZXZvX2RvbiI6ImRvbjppZGVudGl0eTpkdnJ2LWluLTE6ZGV2by8yY2xMOTc1SkdHIiwiaHR0cDovL2RldnJldi5haS9kZXZvaWQiOiJERVYtMmNsTDk3NUpHRyIsImh0dHA6Ly9kZXZyZXYuYWkvZGV2dWlkIjoiREVWVS0xIiwiaHR0cDovL2RldnJldi5haS9kaXNwbGF5bmFtZSI6InBvb2ppdGh1a2FyYWRpMDYiLCJodHRwOi8vZGV2cmV2LmFpL2VtYWlsIjoicG9vaml0aHVrYXJhZGkwNkBnbWFpbC5jb20iLCJodHRwOi8vZGV2cmV2LmFpL2Z1bGxuYW1lIjoiUG9vaml0aCBVIEthcmFkaSIsImh0dHA6Ly9kZXZyZXYuYWkvaXNfdmVyaWZpZWQiOnRydWUsImh0dHA6Ly9kZXZyZXYuYWkvdG9rZW50eXBlIjoidXJuOmRldnJldjpwYXJhbXM6b2F1dGg6dG9rZW4tdHlwZTpwYXQiLCJpYXQiOjE3MTU3NzMxMjMsImlzcyI6Imh0dHBzOi8vYXV0aC10b2tlbi5kZXZyZXYuYWkvIiwianRpIjoiZG9uOmlkZW50aXR5OmR2cnYtaW4tMTpkZXZvLzJjbEw5NzVKR0c6dG9rZW4vMmlXYndlZkoiLCJvcmdfaWQiOiJvcmdfTHV4eG9rOFl3ajNRVkVYVSIsInN1YiI6ImRvbjppZGVudGl0eTpkdnJ2LWluLTE6ZGV2by8yY2xMOTc1SkdHOmRldnUvMSJ9.cO28pcWVfL197r6NAs3sfYRp1uagoXLh6bte08BU0_EsIK3MiTM1644RxRrvO3QFoGOEQRuz947Y2h8z9QdwHBnMs1AaSkPI8NudIBZRZV_lXCPtus2T5YEWnbwQ0djr-qjMBMXtwDtrc29Dw3tTtsoNG1yvNht_W6Sdyu_I1VElqrO6eySmEFDR9s_XzWs82bl5XmlI1A4b7WukN6EPU0OEiCqKMPukxxoBw_HgKJlbublfKAD4cfmOs5wbGFyAg4JLOjshaB58yRA19xnfewmzhFOx7wUoV0X8lGQTdBpsrra4O3upQbMuoeFaki2E2qyrU35BnsKECYBHQarORw'; // Replace <PAT> with your actual personal access token

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
                // 'Authorization': `Bearer ${token}`,
                
            }}
   )
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error('Error response:', error.response.data);
        } else if (error.request) {
            // The request was made but no response was received
            console.error('Error request:', error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error message:', error.message);
        }
    });
