import { Button, ChapterWrapper, ColoredBlock, PropsTable, Toolbar, ValueLabel } from 'components';
import { EmojiButton } from 'components/EmojiButton/EmojiButton';
import { useRerender } from 'hooks/useRerender';
import { useState } from 'react';
import { logTagged } from 'utils/logTagged';

enum UserRole {
  ADMIN = 'admin',
  CUSTOMER = 'customer',
}

interface User {
  id: string;
  name: string;
  role: UserRole;
}

const EMOJIS: string[] = ['🗺', '🗿', '🏟', '🗼', '🏯', '🎡'];
const USER: User = {
  id: '1',
  name: 'John Doe',
  role: UserRole.ADMIN,
};

export function UseStateAndNewRenders(): JSX.Element {
  const [emoji, setEmoji] = useState<string>(EMOJIS[0]);
  const [user, setUser] = useState<User>(USER);

  const rerender = useRerender();

  const mapToEmojiButton = (e: string): JSX.Element => {
    const onClick = () => {
      logTagged('setState', e);
      setEmoji(e);
    };
    return <EmojiButton key={e} emoji={e} onClick={onClick} />;
  };

  const setUserConstant = () => {
    setUser(USER);
  };

  const setObjectLiteral = () => {
    setUser({
      id: '2',
      name: 'Jane Doe',
      role: UserRole.CUSTOMER,
    });
  };

  return (
    <ChapterWrapper
      title="useState and new renders"
      subtitle="Hooks basics, useState"
      rerender={rerender}
    >
      <ColoredBlock style={{ marginBottom: 24 }}>
        I'm a render indicator. If I will change my background color - new render was triggered.
      </ColoredBlock>
      <Toolbar>{EMOJIS.map(mapToEmojiButton)}</Toolbar>
      <ValueLabel value={emoji} />

      <Toolbar>
        <Button text="Set user constant" onClick={setUserConstant} />
        <Button text="Set object literal" onClick={setObjectLiteral} />
      </Toolbar>
      <PropsTable title="User" data={user} />
    </ChapterWrapper>
  );
}
