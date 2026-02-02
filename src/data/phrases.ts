// 常用词组数据（双字词、三字词、四字词）
// 用于第三阶段的词组训练

export interface Phrase {
  text: string;     // 词组文本
  code: string;     // 五笔编码
  type: 'double' | 'triple' | 'quad'; // 词组类型
}

// 双字词组（各取前两码）
export const DOUBLE_PHRASES: Phrase[] = [
  { text: '我们', code: 'TRWU', type: 'double' },
  { text: '他们', code: 'WBWU', type: 'double' },
  { text: '你们', code: 'WQWU', type: 'double' },
  { text: '什么', code: 'WFTC', type: 'double' },
  { text: '这个', code: 'YPWH', type: 'double' },
  { text: '那个', code: 'VFWH', type: 'double' },
  { text: '可以', code: 'SKNY', type: 'double' },
  { text: '没有', code: 'IMDE', type: 'double' },
  { text: '就是', code: 'YIJG', type: 'double' },
  { text: '不是', code: 'GIJG', type: 'double' },
  { text: '知道', code: 'TDUT', type: 'double' },
  { text: '时候', code: 'JFWH', type: 'double' },
  { text: '时间', code: 'JFUJ', type: 'double' },
  { text: '因为', code: 'LDYL', type: 'double' },
  { text: '所以', code: 'RNNY', type: 'double' },
  { text: '如果', code: 'VKJS', type: 'double' },
  { text: '这样', code: 'YPSU', type: 'double' },
  { text: '那样', code: 'VFSU', type: 'double' },
  { text: '怎么', code: 'THTC', type: 'double' },
  { text: '为什', code: 'YLWF', type: 'double' },
  { text: '现在', code: 'GMDH', type: 'double' },
  { text: '已经', code: 'NNXC', type: 'double' },
  { text: '还是', code: 'GIJG', type: 'double' },
  { text: '或者', code: 'AKFT', type: 'double' },
  { text: '但是', code: 'WJJG', type: 'double' },
  { text: '而且', code: 'DMEG', type: 'double' },
  { text: '然后', code: 'QDRG', type: 'double' },
  { text: '如何', code: 'VKWS', type: 'double' },
  { text: '其实', code: 'ADPU', type: 'double' },
  { text: '工作', code: 'AAWT', type: 'double' },
  { text: '学习', code: 'IPNU', type: 'double' },
  { text: '学校', code: 'IPSU', type: 'double' },
  { text: '学生', code: 'IPTG', type: 'double' },
  { text: '生活', code: 'TGIT', type: 'double' },
  { text: '社会', code: 'PYWF', type: 'double' },
  { text: '经济', code: 'XCIY', type: 'double' },
  { text: '问题', code: 'UKRJ', type: 'double' },
  { text: '发展', code: 'NTNA', type: 'double' },
  { text: '国家', code: 'LGPE', type: 'double' },
  { text: '人民', code: 'WWNA', type: 'double' },
  { text: '政府', code: 'GHYW', type: 'double' },
  { text: '企业', code: 'WHOG', type: 'double' },
  { text: '公司', code: 'WCNG', type: 'double' },
  { text: '市场', code: 'YMFN', type: 'double' },
  { text: '技术', code: 'RFSY', type: 'double' },
  { text: '科学', code: 'TUIP', type: 'double' },
  { text: '教育', code: 'FTYC', type: 'double' },
  { text: '文化', code: 'YYWX', type: 'double' },
  { text: '历史', code: 'DLKQ', type: 'double' },
  { text: '世界', code: 'ANLW', type: 'double' },
  { text: '中国', code: 'KHLG', type: 'double' },
  { text: '美国', code: 'UGLG', type: 'double' },
  { text: '北京', code: 'UXYI', type: 'double' },
  { text: '上海', code: 'HHIT', type: 'double' },
  { text: '重要', code: 'TGSV', type: 'double' },
  { text: '主要', code: 'YGSV', type: 'double' },
  { text: '需要', code: 'FDSV', type: 'double' },
  { text: '必须', code: 'NTED', type: 'double' },
  { text: '应该', code: 'YIYY', type: 'double' },
  { text: '可能', code: 'SKCE', type: 'double' },
  { text: '希望', code: 'QDYN', type: 'double' },
  { text: '认为', code: 'YWYL', type: 'double' },
  { text: '觉得', code: 'IPTJ', type: 'double' },
  { text: '成为', code: 'DNYL', type: 'double' },
  { text: '进行', code: 'FJTF', type: 'double' },
  { text: '通过', code: 'CEFP', type: 'double' },
  { text: '使用', code: 'WGET', type: 'double' },
  { text: '提高', code: 'RJYM', type: 'double' },
  { text: '加强', code: 'LKXK', type: 'double' },
  { text: '推动', code: 'RWFC', type: 'double' },
  { text: '促进', code: 'WKFJ', type: 'double' },
  { text: '保护', code: 'WKRY', type: 'double' },
  { text: '支持', code: 'FCRF', type: 'double' },
  { text: '帮助', code: 'DTEG', type: 'double' },
  { text: '解决', code: 'QEUN', type: 'double' },
  { text: '处理', code: 'THGJ', type: 'double' },
  { text: '分析', code: 'WVSR', type: 'double' },
  { text: '研究', code: 'DGPW', type: 'double' },
  { text: '讨论', code: 'YFYW', type: 'double' },
  { text: '完成', code: 'PDDN', type: 'double' },
  { text: '实现', code: 'PUGM', type: 'double' },
  { text: '建设', code: 'VFYM', type: 'double' },
  { text: '改革', code: 'NTAF', type: 'double' },
  { text: '开放', code: 'GAYT', type: 'double' },
  { text: '合作', code: 'WGWT', type: 'double' },
  { text: '交流', code: 'UYIY', type: 'double' },
  { text: '关系', code: 'UDTX', type: 'double' },
  { text: '情况', code: 'NGUK', type: 'double' },
  { text: '方面', code: 'YYDM', type: 'double' },
  { text: '方法', code: 'YYIF', type: 'double' },
  { text: '作用', code: 'WTET', type: 'double' },
  { text: '意义', code: 'UJYQ', type: 'double' },
  { text: '精神', code: 'OGPY', type: 'double' },
  { text: '思想', code: 'LNSH', type: 'double' },
  { text: '态度', code: 'DYYA', type: 'double' },
  { text: '能力', code: 'CELT', type: 'double' },
  { text: '水平', code: 'IIGU', type: 'double' },
  { text: '质量', code: 'RFJS', type: 'double' },
  { text: '效果', code: 'UQJS', type: 'double' },
  { text: '影响', code: 'JYKL', type: 'double' },
];

// 三字词组（取前两字首码+末字前两码）
export const TRIPLE_PHRASES: Phrase[] = [
  { text: '共产党', code: 'AUIP', type: 'triple' },
  { text: '计算机', code: 'YTSM', type: 'triple' },
  { text: '互联网', code: 'GLMY', type: 'triple' },
  { text: '老百姓', code: 'FDVT', type: 'triple' },
  { text: '领导人', code: 'WNWW', type: 'triple' },
  { text: '科学家', code: 'TIPE', type: 'triple' },
  { text: '企业家', code: 'WOPE', type: 'triple' },
  { text: '工作者', code: 'AWFT', type: 'triple' },
  { text: '特别是', code: 'TLJG', type: 'triple' },
  { text: '尤其是', code: 'DAJG', type: 'triple' },
  { text: '即使是', code: 'VWJG', type: 'triple' },
  { text: '如果是', code: 'VJJG', type: 'triple' },
  { text: '之所以', code: 'PRNY', type: 'triple' },
  { text: '不仅是', code: 'GWJG', type: 'triple' },
  { text: '而且是', code: 'DEJG', type: 'triple' },
  { text: '对于我', code: 'CGTR', type: 'triple' },
  { text: '关于我', code: 'UGTR', type: 'triple' },
  { text: '比如说', code: 'XVYU', type: 'triple' },
];

// 四字词组（各取第一码）
export const QUAD_PHRASES: Phrase[] = [
  { text: '中华人民', code: 'KWWN', type: 'quad' },
  { text: '社会主义', code: 'PWYY', type: 'quad' },
  { text: '改革开放', code: 'NAGY', type: 'quad' },
  { text: '实事求是', code: 'PGFJ', type: 'quad' },
  { text: '科学发展', code: 'TINN', type: 'quad' },
  { text: '与时俱进', code: 'GJWF', type: 'quad' },
  { text: '以人为本', code: 'NWOS', type: 'quad' },
  { text: '和谐社会', code: 'TYPW', type: 'quad' },
  { text: '可持续发', code: 'SRXN', type: 'quad' },
  { text: '艰苦奋斗', code: 'CADH', type: 'quad' },
  { text: '自力更生', code: 'TLGT', type: 'quad' },
  { text: '独立自主', code: 'QHTY', type: 'quad' },
  { text: '团结一致', code: 'LXGG', type: 'quad' },
  { text: '开拓进取', code: 'GRFB', type: 'quad' },
  { text: '求真务实', code: 'FFTP', type: 'quad' },
  { text: '脚踏实地', code: 'EKPF', type: 'quad' },
  { text: '解放思想', code: 'QYLS', type: 'quad' },
  { text: '实践检验', code: 'PFSC', type: 'quad' },
  { text: '统筹兼顾', code: 'XTUD', type: 'quad' },
  { text: '循序渐进', code: 'TYIF', type: 'quad' },
  { text: '因地制宜', code: 'LFRP', type: 'quad' },
  { text: '因材施教', code: 'LSYF', type: 'quad' },
  { text: '全心全意', code: 'WVWU', type: 'quad' },
  { text: '精益求精', code: 'OUFO', type: 'quad' },
  { text: '认真负责', code: 'YFQG', type: 'quad' },
  { text: '勤奋好学', code: 'AAVI', type: 'quad' },
  { text: '持之以恒', code: 'RPNG', type: 'quad' },
  { text: '坚持不懈', code: 'JRIG', type: 'quad' },
  { text: '百折不挠', code: 'DRGE', type: 'quad' },
  { text: '勇往直前', code: 'CTFU', type: 'quad' },
  { text: '不断进步', code: 'GOFH', type: 'quad' },
  { text: '日新月异', code: 'JUEB', type: 'quad' },
  { text: '突飞猛进', code: 'PNQF', type: 'quad' },
  { text: '蓬勃发展', code: 'ADNN', type: 'quad' },
  { text: '欣欣向荣', code: 'RQTA', type: 'quad' },
  { text: '蒸蒸日上', code: 'ABJH', type: 'quad' },
  { text: '前程似锦', code: 'UTWQ', type: 'quad' },
  { text: '大有作为', code: 'DEWO', type: 'quad' },
  { text: '大显身手', code: 'DJTR', type: 'quad' },
  { text: '不可思议', code: 'GSLY', type: 'quad' },
];

// 合并所有词组
export const ALL_PHRASES: Phrase[] = [...DOUBLE_PHRASES, ...TRIPLE_PHRASES, ...QUAD_PHRASES];

// 按类型获取词组
export function getPhrasesByType(type: 'double' | 'triple' | 'quad'): Phrase[] {
  switch (type) {
    case 'double':
      return DOUBLE_PHRASES;
    case 'triple':
      return TRIPLE_PHRASES;
    case 'quad':
      return QUAD_PHRASES;
    default:
      return [];
  }
}

// 创建快速查找映射
export const PHRASE_TO_CODE: Record<string, string> = {};
ALL_PHRASES.forEach(p => {
  PHRASE_TO_CODE[p.text] = p.code;
});
