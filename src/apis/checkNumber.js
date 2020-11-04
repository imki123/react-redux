const sleep = (n) => new Promise((resolve, reject) => setTimeout(resolve, n))

export const checkNumber = async number => { //넘버를 체크해서 프라미스를 리턴
  await sleep(1000) //1초 쉬고
  return new Promise((resolve, reject) => { 
    if(isNaN(number)) reject(`${number} is NaN`)
    if(number >= 3) resolve(true)
    else resolve(false)
  })
}