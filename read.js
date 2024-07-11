const dataContainer = document.getElementById("htmlContainer");
// URL ของ API ที่ต้องการเรียกใช้
const apiUrl = 'http://localhost/testapi/api/users/read.php';

// ส่งคำขอ GET เพื่อดึงข้อมูล HTML
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        let userInfo=document.querySelector(".tbody");
        data.forEach(post => {
            const {id, name, email} = post;
            let newRow = `
            <tr>
            <td>${id}</td>
            <td>${name}</td>
            <td>${email}</td>
            <td><button ><a href="update.php?id=${id}" >Edit</a></button></td>
            </tr>
            `;
            userInfo.innerHTML +=newRow
        })
    })
    .catch(error => {
        console.error('เกิดข้อผิดพลาดในการดึง HTML:', error);
    });