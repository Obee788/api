document.getElementById('createForm').addEventListener('submit', function(event) {
    event.preventDefault(); // ป้องกันการส่งฟอร์มแบบปกติ

    // รับค่าจากฟอร์ม
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // URL ของ API ที่ต้องการเพิ่มข้อมูล
    const apiUrl = 'http://localhost/testapi/api/users/create.php';

    // ข้อมูลที่ต้องการส่งไปยัง API
    const data = {
        name: name,
        email: email
    };

    // ตัวแปรที่ใช้ในการส่งคำขอ HTTP POST
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    // ส่งคำขอเพิ่มข้อมูลไปยัง API
    fetch(apiUrl, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to create user');
            }
            return response.json();
        })
        .then(data => {
            console.log('User created successfully:', data);
            // แสดงข้อความหรือทำการอัพเดต UI
            alert('User created successfully');
            document.getElementById('createForm').reset();
        })
        .catch(error => {
            console.error('Error creating user:', error);
            // จัดการกับข้อผิดพลาดที่เกิดขึ้น
            alert('Error creating user');
        });
});