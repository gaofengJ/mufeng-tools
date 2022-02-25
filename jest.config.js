module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest', // 将 ts 文件解析器设置为 ts-jest
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  collectCoverage: true, // 是否显示覆盖率报告
  modulePaths: ['<rootDir>/src'], // 包含的文件夹，<rootDir>代表项目根目录
  modulePathIgnorePatterns: ['<rootDir>/.history'], // 排除的文件夹
  // collectCoverageFrom: [
  //   'src/*.{js,ts}',
  //   '!.history/**/*'
  // ], // 表明测试覆盖率报表覆盖哪些文件
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
