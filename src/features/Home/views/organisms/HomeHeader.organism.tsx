import { Avatar, Box, Group, Stack, Text } from '@mantine/core';
import styles from './HomeHeader.module.scss';

type HomeHeaderProps = {
  title: string;
  subtitle: string;
  userName: string;
  userRole: string;
  avatarSrc?: string;
  avatarLabel: string;
};

export const HomeHeader = ({ title, subtitle, userName, userRole, avatarSrc, avatarLabel }: HomeHeaderProps) => {
  return (
    <Box component="header" className={styles.header}>
      <Group className={styles.inner} justify="space-between" align="center" wrap="nowrap">
        <Stack className={styles.titleGroup} gap={0}>
          <Text className={styles.title} component="h1">
            {title}
          </Text>
          <Text className={styles.subtitle}>{subtitle}</Text>
        </Stack>

        <Group className={styles.userGroup} gap="sm" align="center" wrap="nowrap">
          <Avatar src={avatarSrc} alt={userName} radius="xl" size="md" className={styles.avatar}>
            {avatarLabel}
          </Avatar>
          <Stack className={styles.userStack} gap={0}>
            <Text className={styles.userName}>{userName}</Text>
            <Text className={styles.userRole}>{userRole}</Text>
          </Stack>
        </Group>
      </Group>
    </Box>
  );
};
