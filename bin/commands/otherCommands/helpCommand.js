/**
 * Process help command.
 *
 * @param {proto.IWebMessageInfo} message
 * @param {makeWASocket} sock
 * @return {Promise<void>}
 */
const procCommand = async (message, sock) => {
  let output = '*רשימת פקודות לבוט:*' + '\n';
  output += 'ו--------------------------------ו' + '\n';
  output += '*פקודות קורונה*' + '\n';
  output += '● !קורונה' + '\n';
  output += '● !קורונה <ישוב>' + '\n';
  output += '● !קורונה <מדינה>' + '\n';
  output += 'ו--------------------------------ו' + '\n';
  output += '*יוצר סטיקרים*' + '\n';
  output += '● !סטיקר- הופך תמונה/סרטון/גיף לסטיקר' + '\n';
  output += '● !אהבה @מישהו' + '\n';
  output += '● !אהבה @מישהו1 @מישהו2' + '\n';
  output += 'ו--------------------------------ו' + '\n';
  output += '*פקודות כיף*' + '\n';
  output += '● !מספר <n> <n>' + '\n';
  output += '● !בדיחה' + '\n';
  output += '● !שם' + '\n';
  output += '● !גימטריה <ערך>' + '\n';
  output += '● !מזל- משפטים של עוגיית מזל' + '\n';
  // output += '● !טיפ- נותן טיפ' + '\n';
  output += 'ו--------------------------------ו' + '\n';
  output += '*פקודות שמגיבים להודעה*' + '\n';
  output += '● !מחק' + '\n';
  output += '● !תוצאות (לסקרים)' + '\n';
  output += '● !מכשיר' + '\n';
  output += '● !ניתוח - מנתח את הרגשות בהודעה' + '\n';
  output += '● !פוליגרף' + '\n';
  output += '● !תרגם- מתרגם לעברית' + '\n';
  output += '● !הגב <אימוג\'י>' + '\n';
  output += 'ו--------------------------------ו' + '\n';
  output += '*אחר*' + '\n';
  output += '● !קוד- לקבלת הקוד לבוט'+'\n';
  output += '● !סקר "שאלה" "אופציה א" "אופציה ב"'+'\n';
  output += '● !חשב <ביטוי>'+'\n';
  output += '● !מיזה <טלפון>' + '\n';
  output += '● !אוטו <מספר רישוי>' + '\n';
  output += '● !ויקי <ערך>' + '\n';
  output += '● !ויקי <מספר> <ערך>' + '\n';
  output += '● !פירוש <מילה>' + '\n';
  // output += '● !שידורים <ערוץ> <מתי>' + '\n';
  output += '● !מבזק <מספר>' + '\n';
  output += '● !תרגם <טקסט>' + '\n';
  output += '● !אזעקה <יישוב>' + '\n';
  output += '● !עזרה' + '\n';
  output += '● !הרשאות' + '\n';
  output += 'ו--------------------------------ו' + '\n';
  output += '*כלי עזר*' + '\n';
  output += '● !תחזית ' + '<עיר>' + '\n';
  output += '● !עצלן- תמלול הקלטה' + '\n';
  output += 'ו--------------------------------ו' + '\n';
  output += '*פקודות משחקים*' + '\n';
  output += '● !סוף_משחק - מסיים כל משחק' + '\n';
  output += '● !בול_פגיעה' + '\n';
  output += '● !טריוויה <מספר שאלות>' + '\n';
  output += '● !בלקג\'ק (רק בפרטי)' + '\n';
  output += 'ו--------------------------------ו' + '\n';
  output += '*פקודות מנהלי קבוצות*' + '\n';
  output += '● !צרף <מספר>' + '\n';
  output += '● !הסר <מספר>' + '\n';
  output += '● !תייג- מתייג את כל הקבוצה'+'\n';
  output += 'ו--------------------------------ו' + '\n';
  output += '*פקודות אדמינים של הבוט*' + '\n';
  output += '● !הסר <מספר>' + '\n';
  output += '● !תגיד <טקסט>' + '\n';
  output += '● !כנס- מכניס את הבוט לקישור/הזמנה לקבוצה'+'\n';
  output += '● !חסום <מספר>' + '\n';
  output += '● !התר <מספר>' + '\n';
  output += '● !חירום- מכבה את הבוט' + '\n';
  await sock.sendMessage(message.key.remoteJid, {text: output}, {quoted: message});
};
//●
module.exports = procCommand;
