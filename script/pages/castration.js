const appointmentDate = document.getElementById("appointmentDate");

const appointmentTime = document.getElementById("appointmentTime");

const selectedDate = document.getElementById("selectedDate");

const selectedTime = document.getElementById("selectedTime");

const availableTimes = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00"
];

appointmentDate.addEventListener("change", () => {

    selectedDate.textContent =
        appointmentDate.value;

    appointmentTime.innerHTML =
        '<option value="">Selecione um horário</option>';

    availableTimes.forEach(time => {

        const option =
            document.createElement("option");

        option.value = time;
        option.textContent = time;

        appointmentTime.appendChild(option);

    });

});

appointmentTime.addEventListener("change", () => {

    selectedTime.textContent =
        appointmentTime.value;

});