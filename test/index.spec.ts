import { beforeEach, describe, expect, it, vi } from "vitest";

import { hack } from "@/src/index";
import { logger } from "@/src/logger";

describe("src", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("should pass", () => {
    vi.spyOn(logger, "info").mockReturnValue();

    const result = hack("hey");

    expect(result).toBe("Hack hey");
    expect(logger.info).toHaveBeenCalledWith("Hack hey");
  });
});
