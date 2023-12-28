function validateForm() {
            var fullName = document.getElementById('fullName').value;
            var regNumber = document.getElementById('regNumber').value;
            var gender = document.getElementById('gender').value;
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;
            var confirmPassword = document.getElementById('confirmPassword').value;

            // Simple validation for full name format (alphabets and space)
            var nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;

            // Validation for registration number format (BCS-00-0000-0000)
            var regNumberRegex = /^BCS-[0-9]{2}-[0-9]{4}-[0-9]{4}$/;

            // Validation for email format
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // Password criteria: Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number, and one special character
            var passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;

            if (!nameRegex.test(fullName)) {
                alert('Please enter a valid full name with alphabets and space.');
                return false;
            }

            if (!regNumberRegex.test(regNumber)) {
                alert('Please enter a valid registration number in the format BCS-00-0000-0000.');
                return false;
            }

            if (gender === "") {
                alert('Please select your gender.');
                return false;
            }

            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return false;
            }

            if (!passwordRegex.test(password)) {
                alert('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.');
                return false;
            }

            if (password !== confirmPassword) {
                alert('Password and Confirm Password do not match.');
                return false;
            }

            return true;
        }
    
        // Simulated data for regions and districts
        var regionsData = [
            { id: 1, name: 'Arusha' },
            { id: 2, name: 'Dar es Salaam' },
            { id: 3, name: 'Dodoma' },
            { id: 4, name: 'Geita' },
            { id: 5, name: 'Iringa' },
            { id: 6, name: 'Kagera' },
            { id: 7, name: 'Katavi' },
            { id: 8, name: 'Kigoma' },
            { id: 9, name: 'Kilimanjaro' },
            { id: 10, name: 'Lindi' },
            { id: 11, name: 'Manyara' },
            { id: 12, name: 'Mara' },
            { id: 13, name: 'Mbeya' },
            { id: 14, name: 'Morogoro' },
            { id: 15, name: 'Mtwara' },
            { id: 16, name: 'Mwanza' },
            { id: 17, name: 'Njombe' },
            { id: 18, name: 'Pemba Kaskazini' },
            { id: 19, name: 'Pemba Kusini' },
            { id: 20, name: 'Pwani' },
            { id: 21, name: 'Rukwa' },
            { id: 22, name: 'Ruvuma' },
            { id: 23, name: 'Shinyanga' },
            { id: 24, name: 'Simiyu' },
            { id: 25, name: 'Singida' },
            { id: 26, name: 'Songwe' },
            { id: 27, name: 'Tabora' },
            { id: 28, name: 'Tanga' },
            { id: 29, name: 'Unguja Kaskazini' },
            { id: 30, name: 'Unguja Kusini' }
        ];

        var districtsData = {
            1: ['Arusha Mjini', 'Arusha Vijijini', 'Meru', 'Karatu', 'Monduli', 'Ngorongoro'],
            2: ['Ilala', 'Kinondoni', 'Temeke', 'Kigamboni'],
            3: ['Dodoma mjini', 'Dodoma vijijini', 'Kongwa', 'Mpwapwa', 'Chemba', 'Bahi', 'Chamwino'],
            4: ['Bukombe', 'Chato', 'Geita Mjini'],
            5: ['Iringa Mjini', 'Iringa Vijijini', 'Kilolo', 'Mafinga', 'Mufindi'],
            6: ['Biharamulo', 'Bukoba Mjini', 'Bukoba Vijijini', 'Karagwe', 'Kyela', 'Missenyi', 'Muleba', 'Ngara'],
            7: ['Mlele', 'Mpanda Mjini', 'Mpanda Vijijini'],
            8: ['Buhigwe', 'Kakonko', 'Kasulu Mjini', 'Kasulu Vijijini', 'Kibondo', 'Kigoma Mjini', 'Kigoma Vijijini', 'Uvinza'],
            9: ['Hai', 'Moshi Mjini', 'Moshi Vijijini', 'Mwanga', 'Rombo', 'Siha'],
            10: ['Kilwa', 'Lindi Mjini', 'Lindi Vijijini', 'Liwale', 'Nachingwea', 'Ruangwa'],
            11: ['Babati Mjini', 'Babati Vijijini', 'Hanang', 'Kiteto', 'Mbulu', 'Simanjiro'],
            12: ['Bunda', 'Butiama', 'Musoma Mjini', 'Musoma Vijijini', 'Rorya', 'Serengeti', 'Tarime'],
            13: ['Busokelo', 'Chunya', 'Kyela', 'Mbarali', 'Mbeya Mjini', 'Mbeya Vijijini', 'Rungwe'],
            14: ['Gairo', 'Kilombero', 'Kilosa', 'Morogoro Mjini', 'Morogoro Vijijini', 'Mvomero', 'Ulanga', 'Malinyi'],
            15: ['Masasi Mjini', 'Masasi Vijijini', 'Mtwara Mjini', 'Mtwara Vijijini', 'Nanyumbu', 'Newala'],
            16: ['Ilemela', 'Kwimba', 'Magu', 'Misungwi', 'Nyamagana', 'Sengerema', 'Ukerewe'],
            17: ['Ludewa', 'Makambako', 'Makete', 'Njombe Mjini', 'Njombe Vijijini', 'Wanging’ombe'],
            18: ['Micheweni', 'Wete'],
            19: ['Chake Chake', 'Mkoani'],
            20: ['Bagamoyo', 'Kibaha Mjini', 'Kibaha Vijijini', 'Kisarawe', 'Mafia', 'Mkuranga', 'Rufiji'],
            21: ['Kalambo', 'Nkasi', 'Sumbawanga Mjini', 'Sumbawanga Vijijini'],
            22: ['Mbinga', 'Namtumbo', 'Songea Mjini', 'Songea Vijijini', 'Tunduru'],
            23: ['Kahama Mjini', 'Kahama Vijijini', 'Kishapu', 'Shinyanga Mjini', 'Shinyanga Vijijini'],
            24: ['Bariadi', 'Busega', 'Itilima', 'Maswa', 'Meatu'],
            25: ['Iramba', 'Manyoni', 'Singida Mjini', 'Singida Vijijini'],
            26: ['Ileje', 'Ileje', 'Mbozi', 'Momba'],
            27: ['Igunga', 'Kaliua', 'Nzega', 'Sikonge', 'Tabora Mjini', 'Urambo', 'Uyui'],
            28: ['Handeni Mjini', 'Handeni Vijijini', 'Kilindi', 'Korogwe Mjini', 'Korogwe Vijijini', 'Lushoto', 'Muheza', 'Pangani'],
            29: ['Kaskazini A', 'Kaskazini B'],
            30: ['Kusini A', 'Kusini B']
        };

        // Function to populate options for the regions dropdown
        function loadRegions() {
            var regionSelect = document.getElementById('region');
            regionSelect.innerHTML = '<option value="" disabled selected>Select your region</option>';

            regionsData.forEach(function(region) {
                var option = document.createElement('option');
                option.value = region.id;
                option.text = region.name;
                regionSelect.add(option);
            });
        }

        // Function to populate options for the districts dropdown based on the selected region
        function loadDistricts() {
            var regionSelect = document.getElementById('region');
            var districtSelect = document.getElementById('district');
            var selectedRegionId = regionSelect.value;

            districtSelect.innerHTML = '<option value="" disabled selected>Select your district</option>';

            if (selectedRegionId && districtsData[selectedRegionId]) {
                districtsData[selectedRegionId].forEach(function(district) {
                    var option = document.createElement('option');
                    option.value = district;
                    option.text = district;
                    districtSelect.add(option);
                });
            }
        }

        // Function to initialize the form with regions
        function initializeForm() {
            loadRegions();
            loadDistricts(); // Initial loading of districts based on the default selected region (if any)
        }

        // Initialize the form when the page loads
        window.onload = initializeForm;




    $(document).ready(function(){
        $('.slider').slick({
            autoplay: true,
            autoplaySpeed: 3000,
            dots: true,
            arrows: false
        });
    });


// Add JavaScript for responsive navigation toggle here
document.querySelector('.menu-icon').addEventListener('click', function () {
    document.querySelectorAll('nav a:not(.menu-icon)').forEach(function (link) {
        link.style.display = link.style.display === 'none' ? 'block' : 'none';
    });
});


document.querySelector('.menu-icon').addEventListener('click', function () {
    document.querySelectorAll('nav a:not(.menu-icon)').forEach(function (link) {
        link.classList.toggle('show-links');
    });
});

document.body.addEventListener('click', function (event) {
    if (!event.target.closest('nav')) {
        document.querySelectorAll('nav a:not(.menu-icon)').forEach(function (link) {
            link.classList.remove('show-links');
        });
    }
});


document.querySelector('.menu-icon').addEventListener('click', function () {
    document.querySelectorAll('nav a:not(.menu-icon)').forEach(function (link) {
        link.classList.toggle('show-links');
    });
});

document.body.addEventListener('click', function (event) {
    if (!event.target.closest('nav')) {
        document.querySelectorAll('nav a:not(.menu-icon)').forEach(function (link) {
            link.classList.remove('show-links');
        });
    }
});