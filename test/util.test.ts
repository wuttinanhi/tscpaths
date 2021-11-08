import { loadConfig } from "../src/util"
import { resolve } from "path"

test('function loadConfig should load tsconfig without error', () => {
  expect(() => {
    loadConfig(resolve('test', 'tsconfig.json'))
  }).not.toThrowError()
});

test('function should load tsconfig correctly', () => {
  const config = loadConfig(resolve('test', 'tsconfig.json'))
  expect(config.baseUrl).toEqual(".")
  expect(config.outDir).toEqual("lib")
  expect(config.paths).toMatchObject({ 'src/*': ['src/*'] })
});
