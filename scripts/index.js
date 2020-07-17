// progress bar
const progress = document.querySelector('.progress')
progress.style.width = 0 + '%'
progress.style.background = '#dc3545'

// form sections
const personalInfo = document.querySelector('.persInfo')

const nextOfKin = document.querySelector('.nextOfKin')
nextOfKin.style.display = 'none'

const adminInfo = document.querySelector('.adminInfo')
adminInfo.style.display = 'none'

const confirmation = document.querySelector('.confirmation')
confirmation.style.display = 'none'


// step one button
const stp1Nxt = document.querySelector('.stp1Nxt')

// step two buttons
const stp2Prev = document.querySelector('.stp2Prev')
const stp2Nxt = document.querySelector('.stp2Nxt')

// step three buttons
const stp3Prev = document.querySelector('.stp3Prev')
const stp3Nxt = document.querySelector('.stp3Nxt')

// step four button
const stp4Prev = document.querySelector('.stp4Prev')

// submit form
const submitForm = document.querySelector('.workersForm')

// step 1 (education and qualification)
var education = document.querySelector('.education')
var qualification = document.querySelector('.qualification')
/* ------------------------------- */

// ERROR FUNCTION
errorFunction = () => {
  const errorMsg = document.querySelector('.progressBar').lastElementChild
  errorMsg.className = 'alert alert-danger mb-2'
  errorMsg.style.display = 'block'
  
  const errorText = 'some fields are empty'

  errorMsg.textContent = errorText
  
  setTimeout(() => {
    errorMsg.style.display = 'none'
  }, 5000);
}

// personal information section


let psprt = document.getElementById('psprt')
let btn = document.querySelector('.btnUpload').addEventListener('click', () => {
  psprt.click()
})

psprt.addEventListener('change', (event) => {
  let errMsg = (err) => {
    let errTxt = document.querySelector('#psprtText')
    errTxt.style.color = 'red'
    errTxt.textContent = `${err}`
  }

  let file = psprt.files[0]

  if (file.type !== 'image/jpeg') {
    errMsg('file format not supported')
    return false
  } 
  if(file.size > 200000) {
    errMsg('photo too large')
    return false
  } else {
    const passport = document.getElementById('passport')
    passport.src = URL.createObjectURL(event.target.files[0])
    document.querySelector('#psprtText').style.display = 'none'
    passport.style.display = 'block'
  }
})

function edu() {
  if(document.querySelector('.education').value === 'Yes') {
    document.querySelector('.qDiv').style.visibility = 'visible'
  } else if(document.querySelector('.education').value === 'No') {
    document.querySelector('.qDiv').style.visibility = 'hidden'
  }
}

stp1Nxt.addEventListener('click', () => {
  const photo = document.querySelector('.photo')
  const title = document.querySelector('.title')
  const name = document.querySelector('.fName')
  const DOB = document.querySelector('.dob')
  const BG = document.querySelector('.bGroup')
  const genotype = document.querySelector('.genotype')
  const phone = document.querySelector('.phone')
  const address = document.querySelector('.address')
   
  if (
      photo.value === '' ||
      title.value === '' ||
      name.value === '' ||
      DOB.value === '' ||
      BG.value === '' ||
      genotype.value === '' ||
      phone.value === '' ||
      address.value === '' ||
      education.value === '' ||
      qualification === ''
    )
    {
      errorFunction()
      return false
    }
  
  personalInfo.style.display='none'
  nextOfKin.style.display='block'
  progress.style.width = 40+'%'
  progress.style.background = '#dc3545'
})

// next of kin section
stp2Prev.addEventListener('click', () => {
  personalInfo.style.display='block'
  nextOfKin.style.display='none'
  progress.style.width = 0 +'%'
})
stp2Nxt.addEventListener('click', () => {
  const kinName = document.querySelector('.kinName')
  const kinAddress = document.querySelector('.kinAddress')
  const kinPhone = document.querySelector('.kinPhone')
  const kinRel = document.querySelector('.kinRel')

  if (
      kinName.value === '' ||
      kinAddress.value === '' ||
      kinPhone.value === '' ||
      kinRel.value === ''
    ) 
    {
      errorFunction()
      return false
    }
  nextOfKin.style.display='none'
  adminInfo.style.display='block'
  progress.style.width = 70 +'%'
})

// admin section
stp3Prev.addEventListener('click', () => {
  nextOfKin.style.display='block'
  adminInfo.style.display='none'
  progress.style.width = 40 +'%'
})
stp3Nxt.addEventListener('click', () => { 
  adminInfo.style.display='none'
  confirmation.style.display='block'
  progress.style.width = 100 +'%'
})

// confirmation section
stp4Prev.addEventListener('click', () => {
  adminInfo.style.display='block'
  confirmation.style.display='none'
  progress.style.width = 70 +'%'
})
submitForm.addEventListener('submit', () => {
  if(confirm('sure to submit ?'))
    return true
})
