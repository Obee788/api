document.getElementById('deleteForm').addEventListener('submit', function(event) {
    event.preventDefault(); // ป้องกันการส่งฟอร์มแบบปกติ

    // รับค่า User ID จากฟอร์ม
    const userId = document.getElementById('userId').value;

    // URL ของ API ที่ต้องการลบข้อมูล
    const apiUrl = 'http://localhost/testapi/api/users/delete.php';

    // ข้อมูลที่ต้องการส่งไปยัง API
    const data = {
        id: userId // ระบุ ID ที่ต้องการลบ
    };

    // ตัวแปรที่ใช้ในการส่งคำขอ HTTP DELETE
    const requestOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    // ส่งคำขอลบข้อมูลไปยัง API
    fetch(apiUrl, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to delete data');
            }
            return response.json();
        })
        .then(data => {
            console.log('Delete successful:', data);
            // แสดงข้อความหรือทำการอัพเดต UI
            alert('Delete successful');
        })
        .catch(error => {
            console.error('Error deleting data:', error);
            // จัดการกับข้อผิดพลาดที่เกิดขึ้น
            alert('Error deleting data');
        });
});




document.getElementById('updateForm').addEventListener('submit', function(event) {
    event.preventDefault(); // ป้องกันการส่งฟอร์มแบบปกติ

    // รับค่าจากฟอร์ม
    const id = document.getElementById('id').value;
    const name = document.getElementById('name1').value.trim(); // ใช้ .trim() เพื่อลบช่องว่างที่อาจเกิดขึ้น
    const email = document.getElementById('email').value.trim(); // ใช้ .trim() เพื่อลบช่องว่างที่อาจเกิดขึ้น

    // ตรวจสอบว่ามีการกรอกข้อมูลครบหรือไม่
    if (name === "") {
        alert('Please enter a name.');
        console.log(name);
        return;
    }
    if (email === "") {
        alert('Please enter an email.');
        return;
    }

    // URL ของ API ที่ต้องการอัปเดตข้อมูล
    const apiUrl = 'http://localhost/testapi/api/users/update.php'; // เปลี่ยน URL เป็น URL ของ API ของคุณ

    // ข้อมูลที่ต้องการส่งไปยัง API
    const data = {
        id: id,
        name: name,
        email: email
    };

    console.log('Data to send:', data); // เพิ่มการดีบักข้อมูลที่ส่ง

    // ตัวแปรที่ใช้ในการส่งคำขอ HTTP PUT
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    // ส่งคำขออัปเดตข้อมูลไปยัง API
    fetch(apiUrl, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update user');
            }
            return response.json();
        })
        .then(data => {
            console.log('User updated successfully:', data);
            // แสดงข้อความหรือทำการอัพเดต UI
            alert('User updated successfully');

            // รีเซ็ตฟอร์ม
            document.getElementById('updateForm').reset();
        })
        .catch(error => {
            console.error('Error updating user:', error);
            // จัดการกับข้อผิดพลาดที่เกิดขึ้น
            alert('Error updating user');
        });
});

