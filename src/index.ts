import { logger } from "./logger";

export const hack = (input: string) => {
  const result = `Hack ${input}`;
  logger.info(result);

  return result;
};

if (require.main === module) {
  hack(`${process.env.name}`)
}
