// 👇 Укажи дату начала лагеря (год, месяц-1, день, часы, минуты)
// Внимание: месяц считается с 0 (январь = 0, июль = 6)
const targetDate = new Date(2026, 6, 1, 10, 0, 0).getTime();
//                        ^год ^месяц ^день ^час ^мин

function pad(num) {
  return String(num).padStart(2, '0');
}

function updateTimer() {
  const now = Date.now();
  let diff = targetDate - now;

  // Если дата уже прошла — показываем нули
  if (diff <= 0) {
    document.getElementById('days').textContent = '00';
    document.getElementById('hours').textContent = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    clearInterval(timerId);
    return;
  }

  const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById('days').textContent    = pad(days);
  document.getElementById('hours').textContent   = pad(hours);
  document.getElementById('minutes').textContent = pad(minutes);
  document.getElementById('seconds').textContent = pad(seconds);
}

updateTimer();                                  // запуск сразу
const timerId = setInterval(updateTimer, 1000); // обновление каждую секунду