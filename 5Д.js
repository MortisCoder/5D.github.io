// Список дежурных
const boys = [
	"Абдрасаков Нуриман",
	"Абдымуталиев Арсен",
	"Айтназаров Нурсултан",
	"Алмазов Эйнар",
	"Анарбаев Алихан",
	"Анарбаев Рамазан",
	"Асанов Элмар",
	"Аскеров Ислам",
	"Байдоолотов Түгөлбай",
	"Бактыбеков Тагай",
	"Жанышев Ай-теңир",
	"Жумакунов Жанат",
	"Мансуров Санжар",
	"Маратов Улукмырза",
	"Муратов Элдар",
	"Намазбеков Бейше",
	"Нурбеков Эллан",
	"Нурболотов Нурнасип",
	"Турдубеков Нуриман",
	"Төлömүшөв Кайрат"
];

const girls = [
	"Айтыгулова Аделина",
	"Аскарбекова Акылай",
	"Аскат кызы Каныкей",
	"Бакытбекова Каухар",
	"Бекмырзаева Чолпонай",
	"Жолдошбекова Санира",
	"Идрисова Салима",
	"Ильичбекова Камила",
	"Калмаматова Амина",
	"Керимбекова Элина",
	"Миргазиева Халима",
	"Сабырбекова Мырзайым",
	"Табалдиева Сабина",
	"Эсенбекова Каныкей"
];

// Функция для отображения дежурных
function displayDutyList() {
	const dutyList = document.getElementById('duty-list');
	dutyList.innerHTML = '';

	// Дежурства для этого дня
	const dutyBoys = ["Абдрасаков Нуриман", "Абдымуталиев Арсен", "Айтназаров Нурсултан"];
	const dutyGirls = ["Айтыгулова Аделина", "Аскарбекова Акылай", "Аскат кызы Каныкей"];

	// Добавляем дежурных в график
	dutyBoys.forEach(boy => {
		const boyItem = document.createElement('div');
		boyItem.classList.add('duty-item', 'boy');
		boyItem.textContent = boy;
		dutyList.appendChild(boyItem);
	});

	dutyGirls.forEach(girl => {
		const girlItem = document.createElement('div');
		girlItem.classList.add('duty-item', 'girl');
		girlItem.textContent = girl;
		dutyList.appendChild(girlItem);
	});
}

// Вызов функции для отображения дежурных
displayDutyList();


document.getElementById('toggle-theme').addEventListener('click', () => {
	document.body.classList.toggle('dark-mode');
});
