// 86版五笔二级简码表
// 二级简码只需要两个字母+空格即可输入
// 这里包含最常用的二级简码（约600个）

export interface Level2Code {
  char: string;    // 汉字
  code: string;    // 编码（两位）
}

// 二级简码表（按首字母分组）
export const LEVEL2_CODES: Level2Code[] = [
  // A 开头
  { char: '式', code: 'AA' }, { char: '戒', code: 'AB' }, { char: '劢', code: 'AC' },
  { char: '芽', code: 'AD' }, { char: '划', code: 'AE' }, { char: '或', code: 'AF' },
  { char: '功', code: 'AG' }, { char: '牙', code: 'AH' }, { char: '戎', code: 'AI' },
  { char: '匠', code: 'AJ' }, { char: '菜', code: 'AK' }, { char: '芙', code: 'AL' },
  { char: '共', code: 'AM' }, { char: '芝', code: 'AN' }, { char: '芭', code: 'AO' },
  { char: '芹', code: 'AP' }, { char: '区', code: 'AQ' }, { char: '芍', code: 'AR' },
  { char: '芴', code: 'AS' }, { char: '攻', code: 'AT' }, { char: '茅', code: 'AU' },
  { char: '芯', code: 'AV' }, { char: '七', code: 'AW' }, { char: '艺', code: 'AX' },
  { char: '节', code: 'AY' },

  // B 开头
  { char: '阴', code: 'BA' }, { char: '阝', code: 'BB' }, { char: '队', code: 'BC' },
  { char: '隶', code: 'BD' }, { char: '阳', code: 'BE' }, { char: '陪', code: 'BF' },
  { char: '耻', code: 'BG' }, { char: '邓', code: 'BH' }, { char: '聊', code: 'BI' },
  { char: '显', code: 'BJ' }, { char: '职', code: 'BK' }, { char: '阻', code: 'BL' },
  { char: '取', code: 'BM' }, { char: '孙', code: 'BN' }, { char: '卫', code: 'BO' },
  { char: '联', code: 'BP' }, { char: '陈', code: 'BQ' }, { char: '卿', code: 'BR' },
  { char: '陆', code: 'BS' }, { char: '降', code: 'BT' }, { char: '出', code: 'BU' },
  { char: '幼', code: 'BV' }, { char: '队', code: 'BW' }, { char: '防', code: 'BX' },
  { char: '隐', code: 'BY' },

  // C 开头
  { char: '叉', code: 'CA' }, { char: '矣', code: 'CB' }, { char: '对', code: 'CC' },
  { char: '舛', code: 'CD' }, { char: '台', code: 'CE' }, { char: '怼', code: 'CF' },
  { char: '马', code: 'CG' }, { char: '允', code: 'CH' }, { char: '骁', code: 'CI' },
  { char: '驻', code: 'CJ' }, { char: '驾', code: 'CK' }, { char: '参', code: 'CL' },
  { char: '观', code: 'CM' }, { char: '双', code: 'CN' }, { char: '骏', code: 'CO' },
  { char: '验', code: 'CP' }, { char: '欢', code: 'CQ' }, { char: '艰', code: 'CR' },
  { char: '骤', code: 'CS' }, { char: '能', code: 'CT' }, { char: '鸡', code: 'CU' },
  { char: '难', code: 'CV' }, { char: '圣', code: 'CW' }, { char: '驱', code: 'CX' },
  { char: '骑', code: 'CY' },

  // D 开头
  { char: '左', code: 'DA' }, { char: '厉', code: 'DB' }, { char: '友', code: 'DC' },
  { char: '百', code: 'DD' }, { char: '有', code: 'DE' }, { char: '三', code: 'DF' },
  { char: '石', code: 'DG' }, { char: '大', code: 'DH' }, { char: '砍', code: 'DI' },
  { char: '碍', code: 'DJ' }, { char: '确', code: 'DK' }, { char: '历', code: 'DL' },
  { char: '面', code: 'DM' }, { char: '感', code: 'DN' }, { char: '灰', code: 'DO' },
  { char: '达', code: 'DP' }, { char: '犬', code: 'DQ' }, { char: '厅', code: 'DR' },
  { char: '厄', code: 'DS' }, { char: '帮', code: 'DT' }, { char: '磅', code: 'DU' },
  { char: '砸', code: 'DV' }, { char: '原', code: 'DW' }, { char: '奇', code: 'DX' },
  { char: '砖', code: 'DY' },

  // E 开头
  { char: '且', code: 'EA' }, { char: '肃', code: 'EB' }, { char: '肋', code: 'EC' },
  { char: '须', code: 'ED' }, { char: '采', code: 'EE' }, { char: '肌', code: 'EF' },
  { char: '且', code: 'EG' }, { char: '爱', code: 'EH' }, { char: '腹', code: 'EI' },
  { char: '膀', code: 'EJ' }, { char: '胸', code: 'EK' }, { char: '服', code: 'EL' },
  { char: '脸', code: 'EM' }, { char: '肥', code: 'EN' }, { char: '腊', code: 'EO' },
  { char: '肢', code: 'EP' }, { char: '胆', code: 'EQ' }, { char: '肝', code: 'ER' },
  { char: '胧', code: 'ES' }, { char: '脂', code: 'ET' }, { char: '胃', code: 'EU' },
  { char: '肛', code: 'EV' }, { char: '脊', code: 'EW' }, { char: '受', code: 'EX' },
  { char: '脱', code: 'EY' },

  // F 开头
  { char: '载', code: 'FA' }, { char: '城', code: 'FB' }, { char: '雪', code: 'FC' },
  { char: '地', code: 'FD' }, { char: '霜', code: 'FE' }, { char: '土', code: 'FF' },
  { char: '干', code: 'FG' }, { char: '真', code: 'FH' }, { char: '寒', code: 'FI' },
  { char: '坦', code: 'FJ' }, { char: '吉', code: 'FK' }, { char: '霞', code: 'FL' },
  { char: '赤', code: 'FM' }, { char: '块', code: 'FN' }, { char: '零', code: 'FO' },
  { char: '寺', code: 'FP' }, { char: '无', code: 'FQ' }, { char: '雁', code: 'FR' },
  { char: '霸', code: 'FS' }, { char: '考', code: 'FT' }, { char: '增', code: 'FU' },
  { char: '雅', code: 'FV' }, { char: '需', code: 'FW' }, { char: '运', code: 'FX' },
  { char: '坟', code: 'FY' },

  // G 开头
  { char: '开', code: 'GA' }, { char: '理', code: 'GB' }, { char: '到', code: 'GC' },
  { char: '天', code: 'GD' }, { char: '表', code: 'GE' }, { char: '一', code: 'GF' },
  { char: '王', code: 'GG' }, { char: '正', code: 'GH' }, { char: '瓦', code: 'GI' },
  { char: '现', code: 'GJ' }, { char: '事', code: 'GK' }, { char: '互', code: 'GL' },
  { char: '丽', code: 'GM' }, { char: '刊', code: 'GN' }, { char: '烈', code: 'GO' },
  { char: '政', code: 'GP' }, { char: '列', code: 'GQ' }, { char: '来', code: 'GR' },
  { char: '末', code: 'GS' }, { char: '再', code: 'GT' }, { char: '玩', code: 'GU' },
  { char: '殊', code: 'GV' }, { char: '两', code: 'GW' }, { char: '平', code: 'GX' },
  { char: '青', code: 'GY' },

  // H 开头
  { char: '虐', code: 'HA' }, { char: '睡', code: 'HB' }, { char: '皮', code: 'HC' },
  { char: '督', code: 'HD' }, { char: '肯', code: 'HE' }, { char: '直', code: 'HF' },
  { char: '上', code: 'HG' }, { char: '目', code: 'HH' }, { char: '步', code: 'HI' },
  { char: '旦', code: 'HJ' }, { char: '呈', code: 'HK' }, { char: '卢', code: 'HL' },
  { char: '卧', code: 'HM' }, { char: '眼', code: 'HN' }, { char: '灿', code: 'HO' },
  { char: '虎', code: 'HP' }, { char: '睛', code: 'HQ' }, { char: '盯', code: 'HR' },
  { char: '睁', code: 'HS' }, { char: '止', code: 'HT' }, { char: '瞄', code: 'HU' },
  { char: '眦', code: 'HV' }, { char: '些', code: 'HW' }, { char: '此', code: 'HX' },
  { char: '睬', code: 'HY' },

  // I 开头
  { char: '汰', code: 'IA' }, { char: '浊', code: 'IB' }, { char: '汉', code: 'IC' },
  { char: '泊', code: 'ID' }, { char: '浅', code: 'IE' }, { char: '江', code: 'IF' },
  { char: '沁', code: 'IG' }, { char: '泻', code: 'IH' }, { char: '小', code: 'II' },
  { char: '淌', code: 'IJ' }, { char: '潮', code: 'IK' }, { char: '海', code: 'IL' },
  { char: '洲', code: 'IM' }, { char: '沾', code: 'IN' }, { char: '消', code: 'IO' },
  { char: '浑', code: 'IP' }, { char: '光', code: 'IQ' }, { char: '沐', code: 'IR' },
  { char: '洒', code: 'IS' }, { char: '泛', code: 'IT' }, { char: '润', code: 'IU' },
  { char: '洼', code: 'IV' }, { char: '兴', code: 'IW' }, { char: '波', code: 'IX' },
  { char: '注', code: 'IY' },

  // J 开头
  { char: '蛙', code: 'JA' }, { char: '虾', code: 'JB' }, { char: '蛊', code: 'JC' },
  { char: '蛮', code: 'JD' }, { char: '蛹', code: 'JE' }, { char: '时', code: 'JF' },
  { char: '虽', code: 'JG' }, { char: '日', code: 'JH' }, { char: '虹', code: 'JI' },
  { char: '晨', code: 'JJ' }, { char: '唱', code: 'JK' }, { char: '明', code: 'JL' },
  { char: '晒', code: 'JM' }, { char: '蝉', code: 'JN' }, { char: '曙', code: 'JO' },
  { char: '晋', code: 'JP' }, { char: '易', code: 'JQ' }, { char: '旱', code: 'JR' },
  { char: '量', code: 'JS' }, { char: '早', code: 'JT' }, { char: '昂', code: 'JU' },
  { char: '晚', code: 'JV' }, { char: '电', code: 'JW' }, { char: '晃', code: 'JX' },
  { char: '星', code: 'JY' },

  // K 开头
  { char: '咀', code: 'KA' }, { char: '唤', code: 'KB' }, { char: '吸', code: 'KC' },
  { char: '咽', code: 'KD' }, { char: '吗', code: 'KE' }, { char: '叶', code: 'KF' },
  { char: '号', code: 'KG' }, { char: '口', code: 'KH' }, { char: '哄', code: 'KI' },
  { char: '唱', code: 'KJ' }, { char: '哗', code: 'KK' }, { char: '响', code: 'KL' },
  { char: '嘴', code: 'KM' }, { char: '叫', code: 'KN' }, { char: '哑', code: 'KO' },
  { char: '哨', code: 'KP' }, { char: '员', code: 'KQ' }, { char: '听', code: 'KR' },
  { char: '哼', code: 'KS' }, { char: '吃', code: 'KT' }, { char: '噪', code: 'KU' },
  { char: '嘛', code: 'KV' }, { char: '只', code: 'KW' }, { char: '喀', code: 'KX' },
  { char: '吐', code: 'KY' },

  // L 开头
  { char: '轨', code: 'LA' }, { char: '暗', code: 'LB' }, { char: '轧', code: 'LC' },
  { char: '罪', code: 'LD' }, { char: '思', code: 'LE' }, { char: '轩', code: 'LF' },
  { char: '车', code: 'LG' }, { char: '田', code: 'LH' }, { char: '畔', code: 'LI' },
  { char: '略', code: 'LJ' }, { char: '辄', code: 'LK' }, { char: '男', code: 'LL' },
  { char: '软', code: 'LM' }, { char: '辑', code: 'LN' }, { char: '辗', code: 'LO' },
  { char: '辊', code: 'LP' }, { char: '轮', code: 'LQ' }, { char: '较', code: 'LR' },
  { char: '照', code: 'LS' }, { char: '力', code: 'LT' }, { char: '斩', code: 'LU' },
  { char: '辆', code: 'LV' }, { char: '界', code: 'LW' }, { char: '辈', code: 'LX' },
  { char: '辉', code: 'LY' },

  // M 开头
  { char: '贼', code: 'MA' }, { char: '赠', code: 'MB' }, { char: '贺', code: 'MC' },
  { char: '峭', code: 'MD' }, { char: '骨', code: 'ME' }, { char: '财', code: 'MF' },
  { char: '同', code: 'MG' }, { char: '山', code: 'MH' }, { char: '帐', code: 'MI' },
  { char: '赌', code: 'MJ' }, { char: '嵌', code: 'MK' }, { char: '岗', code: 'ML' },
  { char: '贱', code: 'MM' }, { char: '贬', code: 'MN' }, { char: '烟', code: 'MO' },
  { char: '购', code: 'MP' }, { char: '凤', code: 'MQ' }, { char: '败', code: 'MR' },
  { char: '岁', code: 'MS' }, { char: '贪', code: 'MT' }, { char: '赋', code: 'MU' },
  { char: '贸', code: 'MV' }, { char: '凯', code: 'MW' }, { char: '贵', code: 'MX' },
  { char: '赚', code: 'MY' },

  // N 开头
  { char: '忆', code: 'NA' }, { char: '惭', code: 'NB' }, { char: '怀', code: 'NC' },
  { char: '悟', code: 'ND' }, { char: '悦', code: 'NE' }, { char: '怪', code: 'NF' },
  { char: '恨', code: 'NG' }, { char: '惯', code: 'NH' }, { char: '屁', code: 'NI' },
  { char: '旧', code: 'NJ' }, { char: '惋', code: 'NK' }, { char: '惨', code: 'NL' },
  { char: '恩', code: 'NM' }, { char: '悄', code: 'NN' }, { char: '慌', code: 'NO' },
  { char: '愧', code: 'NP' }, { char: '必', code: 'NQ' }, { char: '怕', code: 'NR' },
  { char: '懂', code: 'NS' }, { char: '性', code: 'NT' }, { char: '慢', code: 'NU' },
  { char: '惊', code: 'NV' }, { char: '恼', code: 'NW' }, { char: '书', code: 'NX' },
  { char: '心', code: 'NY' },

  // O 开头
  { char: '业', code: 'OA' }, { char: '灵', code: 'OB' }, { char: '燃', code: 'OC' },
  { char: '烫', code: 'OD' }, { char: '炉', code: 'OE' }, { char: '烛', code: 'OF' },
  { char: '类', code: 'OG' }, { char: '火', code: 'OH' }, { char: '燎', code: 'OI' },
  { char: '烘', code: 'OJ' }, { char: '焰', code: 'OK' }, { char: '煤', code: 'OL' },
  { char: '烦', code: 'OM' }, { char: '判', code: 'ON' }, { char: '粮', code: 'OO' },
  { char: '迷', code: 'OP' }, { char: '炊', code: 'OQ' }, { char: '燕', code: 'OR' },
  { char: '炸', code: 'OS' }, { char: '炎', code: 'OT' }, { char: '闪', code: 'OU' },
  { char: '煌', code: 'OV' }, { char: '粉', code: 'OW' }, { char: '烧', code: 'OX' },
  { char: '炮', code: 'OY' },

  // P 开头
  { char: '官', code: 'PA' }, { char: '富', code: 'PB' }, { char: '宽', code: 'PC' },
  { char: '寓', code: 'PD' }, { char: '家', code: 'PE' }, { char: '守', code: 'PF' },
  { char: '宇', code: 'PG' }, { char: '之', code: 'PH' }, { char: '宵', code: 'PI' },
  { char: '审', code: 'PJ' }, { char: '客', code: 'PK' }, { char: '军', code: 'PL' },
  { char: '宙', code: 'PM' }, { char: '害', code: 'PN' }, { char: '灾', code: 'PO' },
  { char: '宁', code: 'PP' }, { char: '安', code: 'PQ' }, { char: '实', code: 'PR' },
  { char: '宴', code: 'PS' }, { char: '冠', code: 'PT' }, { char: '察', code: 'PU' },
  { char: '空', code: 'PV' }, { char: '宠', code: 'PW' }, { char: '定', code: 'PX' },
  { char: '神', code: 'PY' },

  // Q 开头
  { char: '钉', code: 'QA' }, { char: '铲', code: 'QB' }, { char: '锣', code: 'QC' },
  { char: '锚', code: 'QD' }, { char: '钩', code: 'QE' }, { char: '针', code: 'QF' },
  { char: '钱', code: 'QG' }, { char: '金', code: 'QH' }, { char: '锋', code: 'QI' },
  { char: '铆', code: 'QJ' }, { char: '钧', code: 'QK' }, { char: '铃', code: 'QL' },
  { char: '钢', code: 'QM' }, { char: '铺', code: 'QN' }, { char: '镇', code: 'QO' },
  { char: '镜', code: 'QP' }, { char: '钟', code: 'QQ' }, { char: '铁', code: 'QR' },
  { char: '锦', code: 'QS' }, { char: '错', code: 'QT' }, { char: '镶', code: 'QU' },
  { char: '锅', code: 'QV' }, { char: '铅', code: 'QW' }, { char: '锁', code: 'QX' },
  { char: '镐', code: 'QY' },

  // R 开头
  { char: '括', code: 'RA' }, { char: '挟', code: 'RB' }, { char: '反', code: 'RC' },
  { char: '拼', code: 'RD' }, { char: '掰', code: 'RE' }, { char: '批', code: 'RF' },
  { char: '提', code: 'RG' }, { char: '白', code: 'RH' }, { char: '拓', code: 'RI' },
  { char: '揭', code: 'RJ' }, { char: '掣', code: 'RK' }, { char: '招', code: 'RL' },
  { char: '担', code: 'RM' }, { char: '抑', code: 'RN' }, { char: '撤', code: 'RO' },
  { char: '揪', code: 'RP' }, { char: '的', code: 'RQ' }, { char: '看', code: 'RR' },
  { char: '搂', code: 'RS' }, { char: '手', code: 'RT' }, { char: '摆', code: 'RU' },
  { char: '执', code: 'RV' }, { char: '找', code: 'RW' }, { char: '换', code: 'RX' },
  { char: '拥', code: 'RY' },

  // S 开头
  { char: '棍', code: 'SA' }, { char: '桥', code: 'SB' }, { char: '权', code: 'SC' },
  { char: '栋', code: 'SD' }, { char: '根', code: 'SE' }, { char: '村', code: 'SF' },
  { char: '本', code: 'SG' }, { char: '木', code: 'SH' }, { char: '档', code: 'SI' },
  { char: '杳', code: 'SJ' }, { char: '柯', code: 'SK' }, { char: '相', code: 'SL' },
  { char: '机', code: 'SM' }, { char: '柿', code: 'SN' }, { char: '楞', code: 'SO' },
  { char: '构', code: 'SP' }, { char: '杯', code: 'SQ' }, { char: '析', code: 'SR' },
  { char: '栈', code: 'SS' }, { char: '述', code: 'ST' }, { char: '横', code: 'SU' },
  { char: '极', code: 'SV' }, { char: '森', code: 'SW' }, { char: '格', code: 'SX' },
  { char: '术', code: 'SY' },

  // T 开头
  { char: '秃', code: 'TA' }, { char: '季', code: 'TB' }, { char: '科', code: 'TC' },
  { char: '稀', code: 'TD' }, { char: '秤', code: 'TE' }, { char: '租', code: 'TF' },
  { char: '生', code: 'TG' }, { char: '禾', code: 'TH' }, { char: '秒', code: 'TI' },
  { char: '香', code: 'TJ' }, { char: '种', code: 'TK' }, { char: '秀', code: 'TL' },
  { char: '秘', code: 'TM' }, { char: '私', code: 'TN' }, { char: '移', code: 'TO' },
  { char: '税', code: 'TP' }, { char: '称', code: 'TQ' }, { char: '物', code: 'TR' },
  { char: '稳', code: 'TS' }, { char: '舌', code: 'TT' }, { char: '稀', code: 'TU' },
  { char: '程', code: 'TV' }, { char: '得', code: 'TW' }, { char: '积', code: 'TX' },
  { char: '第', code: 'TY' },

  // U 开头
  { char: '症', code: 'UA' }, { char: '疤', code: 'UB' }, { char: '病', code: 'UC' },
  { char: '瘫', code: 'UD' }, { char: '前', code: 'UE' }, { char: '痒', code: 'UF' },
  { char: '首', code: 'UG' }, { char: '立', code: 'UH' }, { char: '癣', code: 'UI' },
  { char: '痛', code: 'UJ' }, { char: '疯', code: 'UK' }, { char: '痕', code: 'UL' },
  { char: '痴', code: 'UM' }, { char: '瘩', code: 'UN' }, { char: '瘦', code: 'UO' },
  { char: '凑', code: 'UP' }, { char: '疲', code: 'UQ' }, { char: '瓶', code: 'UR' },
  { char: '瘸', code: 'US' }, { char: '产', code: 'UT' }, { char: '阅', code: 'UU' },
  { char: '瘤', code: 'UV' }, { char: '闰', code: 'UW' }, { char: '北', code: 'UX' },
  { char: '交', code: 'UY' },

  // V 开头
  { char: '姨', code: 'VA' }, { char: '好', code: 'VB' }, { char: '妇', code: 'VC' },
  { char: '嫁', code: 'VD' }, { char: '妈', code: 'VE' }, { char: '姐', code: 'VF' },
  { char: '女', code: 'VG' }, { char: '九', code: 'VH' }, { char: '妖', code: 'VI' },
  { char: '姆', code: 'VJ' }, { char: '婆', code: 'VK' }, { char: '媚', code: 'VL' },
  { char: '妨', code: 'VM' }, { char: '妮', code: 'VN' }, { char: '娄', code: 'VO' },
  { char: '嬉', code: 'VP' }, { char: '姝', code: 'VQ' }, { char: '妍', code: 'VR' },
  { char: '嫌', code: 'VS' }, { char: '姓', code: 'VT' }, { char: '姿', code: 'VU' },
  { char: '刀', code: 'VV' }, { char: '娘', code: 'VW' }, { char: '婚', code: 'VX' },
  { char: '如', code: 'VY' },

  // W 开头
  { char: '代', code: 'WA' }, { char: '传', code: 'WB' }, { char: '伐', code: 'WC' },
  { char: '伴', code: 'WD' }, { char: '估', code: 'WE' }, { char: '付', code: 'WF' },
  { char: '全', code: 'WG' }, { char: '人', code: 'WH' }, { char: '侥', code: 'WI' },
  { char: '倡', code: 'WJ' }, { char: '偿', code: 'WK' }, { char: '伯', code: 'WL' },
  { char: '倾', code: 'WM' }, { char: '俭', code: 'WN' }, { char: '傲', code: 'WO' },
  { char: '依', code: 'WP' }, { char: '仅', code: 'WQ' }, { char: '份', code: 'WR' },
  { char: '体', code: 'WS' }, { char: '作', code: 'WT' }, { char: '备', code: 'WU' },
  { char: '仓', code: 'WV' }, { char: '做', code: 'WW' }, { char: '化', code: 'WX' },
  { char: '从', code: 'WY' },

  // X 开头
  { char: '线', code: 'XA' }, { char: '绳', code: 'XB' }, { char: '红', code: 'XC' },
  { char: '纵', code: 'XD' }, { char: '级', code: 'XE' }, { char: '纺', code: 'XF' },
  { char: '纪', code: 'XG' }, { char: '纟', code: 'XH' }, { char: '结', code: 'XI' },
  { char: '细', code: 'XJ' }, { char: '绎', code: 'XK' }, { char: '组', code: 'XL' },
  { char: '纳', code: 'XM' }, { char: '纷', code: 'XN' }, { char: '缕', code: 'XO' },
  { char: '编', code: 'XP' }, { char: '纯', code: 'XQ' }, { char: '统', code: 'XR' },
  { char: '缎', code: 'XS' }, { char: '乡', code: 'XT' }, { char: '络', code: 'XU' },
  { char: '绒', code: 'XV' }, { char: '给', code: 'XW' }, { char: '经', code: 'XX' },
  { char: '绪', code: 'XY' },

  // Y 开头
  { char: '谣', code: 'YA' }, { char: '亥', code: 'YB' }, { char: '充', code: 'YC' },
  { char: '庞', code: 'YD' }, { char: '谊', code: 'YE' }, { char: '计', code: 'YF' },
  { char: '主', code: 'YG' }, { char: '言', code: 'YH' }, { char: '谜', code: 'YI' },
  { char: '课', code: 'YJ' }, { char: '访', code: 'YK' }, { char: '方', code: 'YL' },
  { char: '高', code: 'YM' }, { char: '记', code: 'YN' }, { char: '谋', code: 'YO' },
  { char: '设', code: 'YP' }, { char: '义', code: 'YQ' }, { char: '话', code: 'YR' },
  { char: '谅', code: 'YS' }, { char: '放', code: 'YT' }, { char: '说', code: 'YU' },
  { char: '认', code: 'YV' }, { char: '让', code: 'YW' }, { char: '率', code: 'YX' },
  { char: '议', code: 'YY' },
];

// 快速查找：字符到二级简码的映射
export const CHAR_TO_LEVEL2: Record<string, string> = {};
LEVEL2_CODES.forEach(item => {
  CHAR_TO_LEVEL2[item.char] = item.code;
});

// 快速查找：二级简码到字符的映射
export const LEVEL2_TO_CHAR: Record<string, string> = {};
LEVEL2_CODES.forEach(item => {
  LEVEL2_TO_CHAR[item.code] = item.char;
});

// 检查一个字符是否是二级简码
export function isLevel2Code(char: string): boolean {
  return char in CHAR_TO_LEVEL2;
}

// 获取二级简码
export function getLevel2Code(char: string): string | undefined {
  return CHAR_TO_LEVEL2[char];
}
