import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const TranslationText = styled.div`
  white-space: pre-line;
  & + & {
     margin-top: 1em;
   }
`;

// const ToggleButton = styled.button`
//   background-color: #f2f2f2;
//   border: none;
//   border-radius: 5px;
//   padding: 10px;
//   margin: 5px;
//   cursor: pointer;
//   font-weight: bold;
// `;

function Lyrics() {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const changeLanguage = (language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
  };

  return (
    <div>
     Choose a language: &nbsp;
<ToggleButtonGroup value={selectedLanguage} exclusive>
      <ToggleButton
        value="en"
        onClick={() => changeLanguage('en')}
        sx={{
          bgcolor: selectedLanguage === 'en' ? 'primary.main' : '',
          color: selectedLanguage === 'en' ? 'primary.contrastText' : '',
        }}
      >
        English
      </ToggleButton>
      <ToggleButton
        value="hi"
        onClick={() => changeLanguage('hi')}
        sx={{
          bgcolor: selectedLanguage === 'hi' ? 'primary.main' : '',
          color: selectedLanguage === 'hi' ? 'primary.contrastText' : '',
        }}
      >
        हिंदी
      </ToggleButton>
      <ToggleButton
        value="te"
        onClick={() => changeLanguage('te')}
        sx={{
          bgcolor: selectedLanguage === 'te' ? 'primary.main' : '',
          color: selectedLanguage === 'te' ? 'primary.contrastText' : '',
        }}
      >
        తెలుగు
      </ToggleButton>
    </ToggleButtonGroup>

      <br/><br/>

      <TranslationText>{t('intro')}</TranslationText><br/>
      <TranslationText>{t('l1')}</TranslationText><br/>
      <TranslationText>{t('l2')}</TranslationText><br/>
      <TranslationText>{t('l3')}</TranslationText><br/>
      <TranslationText>{t('l4')}</TranslationText><br/>
      <TranslationText>{t('l5')}</TranslationText><br/>
      <TranslationText>{t('l6')}</TranslationText><br/>
      <TranslationText>{t('l7')}</TranslationText><br/>
      <TranslationText>{t('l8')}</TranslationText><br/>
      <TranslationText>{t('l9')}</TranslationText><br/>
      <TranslationText>{t('l10')}</TranslationText><br/>
      <TranslationText>{t('l11')}</TranslationText><br/>
      <TranslationText>{t('l12')}</TranslationText><br/>
      <TranslationText>{t('l13')}</TranslationText><br/>
      <TranslationText>{t('l14')}</TranslationText><br/>
      <TranslationText>{t('l15')}</TranslationText><br/>
      <TranslationText>{t('l16')}</TranslationText><br/>
      <TranslationText>{t('l17')}</TranslationText><br/>
      <TranslationText>{t('l18')}</TranslationText><br/>
      <TranslationText>{t('l19')}</TranslationText><br/>
      <TranslationText>{t('l20')}</TranslationText><br/>
      <TranslationText>{t('l21')}</TranslationText><br/>
      <TranslationText>{t('l22')}</TranslationText><br/>
      <TranslationText>{t('l23')}</TranslationText><br/>
      <TranslationText>{t('l24')}</TranslationText><br/>
      <TranslationText>{t('l25')}</TranslationText><br/>
      <TranslationText>{t('l26')}</TranslationText><br/>
      <TranslationText>{t('l27')}</TranslationText><br/>
      <TranslationText>{t('l28')}</TranslationText><br/>
      <TranslationText>{t('l29')}</TranslationText><br/>
      <TranslationText>{t('l30')}</TranslationText><br/>
      <TranslationText>{t('l31')}</TranslationText><br/>
      <TranslationText>{t('l32')}</TranslationText><br/>
      <TranslationText>{t('l33')}</TranslationText><br/>
      <TranslationText>{t('l34')}</TranslationText><br/>
      <TranslationText>{t('l35')}</TranslationText><br/>
      <TranslationText>{t('l36')}</TranslationText><br/>
      <TranslationText>{t('l37')}</TranslationText><br/>
      <TranslationText>{t('l38')}</TranslationText><br/>
      <TranslationText>{t('l39')}</TranslationText><br/>
      <TranslationText>{t('l40')}</TranslationText><br/>
      <TranslationText>{t('outro')}</TranslationText>

      <br/><br/>
    </div>
  );
}

export default Lyrics;