const addBtn = document.querySelector('.add-note')
const cancelBtn = document.querySelector('.cancel')
const panel = document.querySelector('.note-panel')
const notes = document.querySelector('.note-area')
const delateBtn = document.querySelector('.delate-all')
const note = document.querySelector('.note')
const removeBtn = document.querySelector('.delate-note')
const category = document.querySelector('#category')
const textNote = document.querySelector('#text')
const error = document.querySelector('.error')
const saveBtn = document.querySelector('.save')

const arrOptions = [...category]

////functions///

const addNote = () => {
	panel.style.display = 'flex'
}

const cancelPanel = () => {
	panel.style.display = 'none'
	textNote.value = ''
	category.selectedIndex = 0
}

const delateNotes = () => {
	notes.innerHTML = ''
}

const checkPanel = () => {
	let optionCategory = category.selectedIndex
	if (optionCategory === 0 || textNote.value === '') {
		error.style.visibility = 'visible'
	} else {
		createNote(optionCategory)
		cancelPanel()
	}
}

const delateNote = e => {
	if (e.target.matches('.fa-times')) {
		const parent = e.target
		parent.closest('.note').remove()
	}
}

const createNote = selectIndex => {
	const divNote = document.createElement('div')
	notes.append(divNote)
	divNote.classList.add('note')

	let title = arrOptions[selectIndex].textContent
	divNote.innerHTML = `
    <div class="note__header"><h3 class="note-title">${title}</h3>  <button class="delate-note"><i class="fas fa-times icon"></i></button></div>`
	const divText = document.createElement('div')
	divNote.append(divText)
	divText.classList.add('note__body')
	let text = textNote.value
	const p = document.createElement('p')
	divText.append(p)
	p.textContent = `${text}`
	changeColor(selectIndex, divNote)
}

const changeColor = (option, note) => {
	switch (option) {
		case 1:
			note.style.backgroundColor = 'rgb(72,255,0)'
			break
		case 2:
			note.style.backgroundColor = 'rgb(255,243,0)'
			break
		case 3:
			note.style.backgroundColor = 'rgb(0,170,255)'
			break
	}
}

////listeners////

addBtn.addEventListener('click', addNote)
cancelBtn.addEventListener('click', cancelPanel)
delateBtn.addEventListener('click', delateNotes)
notes.addEventListener('click', delateNote)
saveBtn.addEventListener('click', checkPanel)
