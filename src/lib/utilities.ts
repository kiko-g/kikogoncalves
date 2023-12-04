export function formatDate(dateString: string) {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString('pt-PT', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'GMT',
  })
}

export function calculateAge(dateOfBirth: string = '03-08-1999'): number {
  let [day, month, year] = dateOfBirth.split('-').map(Number) // dd-mm-yyyy
  let today = new Date()
  let birthDate = new Date(year, month - 1, day)
  let age = today.getFullYear() - birthDate.getFullYear()
  let m = today.getMonth() - birthDate.getMonth()

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--

  return age
}
