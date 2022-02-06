function strip(x: string | number) {
  if (typeof x === 'number') {
    return x.toFixed(2)
  }
  return x.trim()
}

class myResponse {
  header = 'response header'
  result = 'response result'
}

class myError {
  header = 'error header'
  message = 'error result'
}

function handle(res: myResponse | myError) {
  if (res instanceof myResponse) {
    return {
      info: res.header + res.result
    }
  } else {
    return {
      info: res.header + res.message
    }
  }
}

//  ====

type AllertType = 'success' | 'danger' | 'warning'

function setAllertType(type: AllertType) {
  // ..
}

setAllertType('success')
setAllertType('warning')

// setAllertType('default')