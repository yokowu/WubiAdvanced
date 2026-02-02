// 86版五笔字根表
// 按键位组织，包含字根和助记口诀

export interface Radical {
  char: string;      // 字根字符
  key: string;       // 所在键位
  isMain: boolean;   // 是否为键名字根
}

export interface KeyInfo {
  key: string;       // 键位
  zone: number;      // 区号 (1-5)
  position: number;  // 位号 (1-5)
  keyName: string;   // 键名（主字根）
  radicals: string[]; // 该键位上的所有字根
  mnemonic: string;  // 助记口诀
}

// 五笔86版字根表 - 按键位组织
export const WUBI_KEYS: KeyInfo[] = [
  // 第一区：横区 (11-15) G F D S A
  { key: 'G', zone: 1, position: 1, keyName: '王', radicals: ['王', '丌', '五', '一'], mnemonic: '王旁青头戋五一' },
  { key: 'F', zone: 1, position: 2, keyName: '土', radicals: ['土', '士', '二', '干', '十', '寸', '雨'], mnemonic: '土士二干十寸雨' },
  { key: 'D', zone: 1, position: 3, keyName: '大', radicals: ['大', '犬', '三', '羊', '古', '石', '厂'], mnemonic: '大犬三羊古石厂' },
  { key: 'S', zone: 1, position: 4, keyName: '木', radicals: ['木', '丁', '西'], mnemonic: '木丁西' },
  { key: 'A', zone: 1, position: 5, keyName: '工', radicals: ['工', '戈', '草', '头', '右', '框', '七'], mnemonic: '工戈草头右框七' },

  // 第二区：竖区 (21-25) H J K L M
  { key: 'H', zone: 2, position: 1, keyName: '目', radicals: ['目', '具', '上', '止', '卜', '虎', '皮'], mnemonic: '目具上止卜虎皮' },
  { key: 'J', zone: 2, position: 2, keyName: '日', radicals: ['日', '早', '两', '竖', '与', '虫'], mnemonic: '日早两竖与虫依' },
  { key: 'K', zone: 2, position: 3, keyName: '口', radicals: ['口', '川'], mnemonic: '口与川，字根稀' },
  { key: 'L', zone: 2, position: 4, keyName: '田', radicals: ['田', '甲', '方', '框', '四', '车', '力'], mnemonic: '田甲方框四车力' },
  { key: 'M', zone: 2, position: 5, keyName: '山', radicals: ['山', '由', '贝', '几', '骨'], mnemonic: '山由贝，下框几' },

  // 第三区：撇区 (31-35) T R E W Q
  { key: 'T', zone: 3, position: 1, keyName: '禾', radicals: ['禾', '竹', '一', '撇', '双', '人', '立', '倒', '八'], mnemonic: '禾竹一撇双人立' },
  { key: 'R', zone: 3, position: 2, keyName: '白', radicals: ['白', '手', '扌', '斤'], mnemonic: '白手看头三二斤' },
  { key: 'E', zone: 3, position: 3, keyName: '月', radicals: ['月', '彡', '乃', '用', '家', '衣', '底'], mnemonic: '月彡乃用家衣底' },
  { key: 'W', zone: 3, position: 4, keyName: '人', radicals: ['人', '八', '登', '头', '单', '人', '几'], mnemonic: '人和八，三四里' },
  { key: 'Q', zone: 3, position: 5, keyName: '金', radicals: ['金', '勹', '缺', '点', '无', '尾', '鱼', '犬', '旁', '留', '叉', '儿', '一', '点', '夕', '氏', '无', '七'], mnemonic: '金勹缺点无尾鱼' },

  // 第四区：捺区 (41-45) Y U I O P
  { key: 'Y', zone: 4, position: 1, keyName: '言', radicals: ['言', '讠', '文', '方', '广', '在', '四', '一', '高', '头', '谁', '人', '去'], mnemonic: '言文方广在四一' },
  { key: 'U', zone: 4, position: 2, keyName: '立', radicals: ['立', '辛', '两', '点', '六', '门', '病'], mnemonic: '立辛两点六门病' },
  { key: 'I', zone: 4, position: 3, keyName: '水', radicals: ['水', '氵', '小', '倒', '立'], mnemonic: '水旁兴头小倒立' },
  { key: 'O', zone: 4, position: 4, keyName: '火', radicals: ['火', '灬', '业', '头', '四', '点', '米'], mnemonic: '火业头，四点米' },
  { key: 'P', zone: 4, position: 5, keyName: '之', radicals: ['之', '宝', '盖', '摘', '礻', '衤'], mnemonic: '之字军盖道建底' },

  // 第五区：折区 (51-55) N B V C X
  { key: 'N', zone: 5, position: 1, keyName: '已', radicals: ['已', '己', '巳', '半', '满', '不', '出', '左', '框', '心', '和', '羽'], mnemonic: '已半巳满不出己' },
  { key: 'B', zone: 5, position: 2, keyName: '子', radicals: ['子', '孑', '了', '也', '框', '向', '上', '卩', '阝'], mnemonic: '子耳了也框向上' },
  { key: 'V', zone: 5, position: 3, keyName: '女', radicals: ['女', '刀', '九', '臼', '山', '朝', '西'], mnemonic: '女刀九臼山朝西' },
  { key: 'C', zone: 5, position: 4, keyName: '又', radicals: ['又', '巴', '马', '矣', '去', '云', '勇', '字', '去'], mnemonic: '又巴马，矣上去' },
  { key: 'X', zone: 5, position: 5, keyName: '纟', radicals: ['纟', '幺', '母', '贯', '头', '弓', '匕'], mnemonic: '幺母绞丝弓三匕' },
];

// 将字根表转换为字根到键位的映射
export const RADICAL_TO_KEY: Record<string, string> = {};
WUBI_KEYS.forEach(keyInfo => {
  keyInfo.radicals.forEach(radical => {
    RADICAL_TO_KEY[radical] = keyInfo.key;
  });
});

// 获取某个键位的所有信息
export function getKeyInfo(key: string): KeyInfo | undefined {
  return WUBI_KEYS.find(k => k.key.toUpperCase() === key.toUpperCase());
}

// 获取某个区的所有键位
export function getZoneKeys(zone: number): KeyInfo[] {
  return WUBI_KEYS.filter(k => k.zone === zone);
}

// 区域名称
export const ZONE_NAMES = ['', '横区', '竖区', '撇区', '捺区', '折区'];

// 标准键盘布局（用于显示）
export const KEYBOARD_LAYOUT = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

// 手指分配（用于指法检测）
export const FINGER_MAP: Record<string, string> = {
  'Q': '左小指', 'A': '左小指', 'Z': '左小指',
  'W': '左无名指', 'S': '左无名指', 'X': '左无名指',
  'E': '左中指', 'D': '左中指', 'C': '左中指',
  'R': '左食指', 'F': '左食指', 'V': '左食指', 'T': '左食指', 'G': '左食指', 'B': '左食指',
  'Y': '右食指', 'H': '右食指', 'N': '右食指', 'U': '右食指', 'J': '右食指', 'M': '右食指',
  'I': '右中指', 'K': '右中指',
  'O': '右无名指', 'L': '右无名指',
  'P': '右小指',
};
