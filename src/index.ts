export const hack = (input: string) => {
  return `Hello ${input}`;
}

if (require.main === module) {
  console.log(hack(`${process.env.name}`))
}
