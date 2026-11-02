import { getAssetIdByName } from '@valenced/assets'
import Page from '@valenced/components/Page'
import { Design } from '@valenced/discord/design'
import { ScrollView } from 'react-native'
import { markAllAsRead } from './unread'

const { Button, Stack, Text } = Design

export default function SettingsComponent() {
	return (
		<ScrollView>
			<Page>
				<Stack spacing={16}>
					<Text variant="text-md/medium" color="text-muted">
						Clears the unread badge on every server channel and thread you can
						see. Direct messages are not affected.
					</Text>
					<Button
						variant="primary"
						size="lg"
						icon={getAssetIdByName('ChatCheckIcon')}
						text="Mark everything as read"
						onPress={markAllAsRead}
					/>
				</Stack>
			</Page>
		</ScrollView>
	)
}
