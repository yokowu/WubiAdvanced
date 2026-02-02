// 86版五笔一级简码（25个最常用字）
// 一级简码只需要一个字母+空格即可输入

export interface SimpleCode {
  char: string;    // 汉字
  code: string;    // 编码
  frequency: number; // 使用频率排名
}

// 一级简码表（共25个字）
export const LEVEL1_CODES: SimpleCode[] = [
  { char: '一', code: 'G', frequency: 1 },
  { char: '地', code: 'F', frequency: 2 },
  { char: '在', code: 'D', frequency: 3 },
  { char: '要', code: 'S', frequency: 4 },
  { char: '工', code: 'A', frequency: 5 },
  { char: '上', code: 'H', frequency: 6 },
  { char: '是', code: 'J', frequency: 7 },
  { char: '中', code: 'K', frequency: 8 },
  { char: '国', code: 'L', frequency: 9 },
  { char: '同', code: 'M', frequency: 10 },
  { char: '和', code: 'T', frequency: 11 },
  { char: '的', code: 'R', frequency: 12 },
  { char: '有', code: 'E', frequency: 13 },
  { char: '人', code: 'W', frequency: 14 },
  { char: '我', code: 'Q', frequency: 15 },
  { char: '主', code: 'Y', frequency: 16 },
  { char: '产', code: 'U', frequency: 17 },
  { char: '不', code: 'I', frequency: 18 },
  { char: '为', code: 'O', frequency: 19 },
  { char: '这', code: 'P', frequency: 20 },
  { char: '民', code: 'N', frequency: 21 },
  { char: '了', code: 'B', frequency: 22 },
  { char: '发', code: 'V', frequency: 23 },
  { char: '以', code: 'C', frequency: 24 },
  { char: '经', code: 'X', frequency: 25 },
];

// 快速查找：字符到一级简码的映射
export const CHAR_TO_LEVEL1: Record<string, string> = {};
LEVEL1_CODES.forEach(item => {
  CHAR_TO_LEVEL1[item.char] = item.code;
});

// 快速查找：一级简码到字符的映射
export const LEVEL1_TO_CHAR: Record<string, string> = {};
LEVEL1_CODES.forEach(item => {
  LEVEL1_TO_CHAR[item.code] = item.char;
});

// 检查一个字符是否是一级简码
export function isLevel1Code(char: string): boolean {
  return char in CHAR_TO_LEVEL1;
}

// 获取一级简码
export function getLevel1Code(char: string): string | undefined {
  return CHAR_TO_LEVEL1[char];
}
