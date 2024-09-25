import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Themes from '@constants/Themes';
import Typo from '@constants/Typo';
import Layout from '@constants/Layout';
import { Programs } from '@constants/MockData';

import { formatSecondsToTime, getStatusBarHeight } from '@utils/helpers';
import { ProgramTypeLabels } from '@customTypes/program';
import dayjs from 'dayjs';

export default function Home(): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerGreetings} numberOfLines={1}>
          Hello, eNdSHA
        </Text>
        <TouchableOpacity style={styles.notificationBtn}>
          <Ionicons name="notifications-outline" size={24} />
        </TouchableOpacity>
      </View>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}>
        <View style={styles.workoutOverallStats}>
          <View style={styles.statsItem}>
            <Ionicons name="flame" size={24} />
            <View style={styles.statsItemSeparator} />
            <View style={{ ...Layout.flexCol.alignCenter, flex: 1 }}>
              <Text style={styles.statsNumber}>120</Text>
              <Text style={styles.statsText}>Calories</Text>
            </View>
          </View>
          <View style={{ width: 8 }} />
          <View style={styles.statsItem}>
            <Ionicons name="stopwatch" size={24} />
            <View style={styles.statsItemSeparator} />
            <View style={{ ...Layout.flexCol.alignCenter, flex: 1 }}>
              <Text style={styles.statsNumber}>120</Text>
              <Text style={styles.statsText}>Minutes</Text>
            </View>
          </View>
          <View style={{ width: 8 }} />
          <View style={styles.statsItem}>
            <Ionicons name="heart" size={24} />
            <View style={styles.statsItemSeparator} />
            <View style={{ ...Layout.flexCol.alignCenter, flex: 1 }}>
              <Text style={styles.statsNumber}>76</Text>
              <Text style={styles.statsText}>Heart</Text>
            </View>
          </View>
        </View>

        <View style={styles.homeSection}>
          <Text style={styles.sectionTitle}>Today Activity</Text>
          <View style={styles.mapContainer}>
            <View style={styles.activityStats}>
              <View style={styles.activityStatsItem}>
                <Text style={styles.activityStatsText}>Average</Text>
                <Text style={styles.activityStatsNumber}>
                  15 <Text style={styles.activityStatsUnit}>km/h</Text>
                </Text>
              </View>
              <View style={styles.activityStatsItem}>
                <Text style={styles.activityStatsText}>Distance</Text>
                <Text style={styles.activityStatsNumber}>
                  6 <Text style={styles.activityStatsUnit}>km</Text>
                </Text>
              </View>
              <View style={styles.activityStatsItem}>
                <Text style={styles.activityStatsText}>Average</Text>
                <Text style={styles.activityStatsNumber}>
                  15 <Text style={styles.activityStatsUnit}>km/h</Text>
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.homeSection}>
          <Text style={styles.sectionTitle}>Your Programs</Text>
          <FlatList
            scrollEnabled={false}
            data={Programs}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={styles.programCard}>
                <Image
                  source={{ uri: item.thumbnailUrl }}
                  style={styles.programThumbnail}
                />
                <View
                  style={{
                    ...Layout.flexCol.justifyBetween,
                    flex: 1,
                  }}>
                  <View style={{ flex: 1 }}>
                    <View>
                      <Text style={styles.programName}>{item.name}</Text>
                      <Text style={styles.programType}>
                        {ProgramTypeLabels[item.type]}
                      </Text>
                    </View>
                    <TouchableOpacity style={styles.playBtn}>
                      <Ionicons name="play" size={16} />
                    </TouchableOpacity>
                  </View>
                  <View style={Layout.flexRow.alignCenter}>
                    <View style={styles.programMeasurementItem}>
                      <Ionicons name="stopwatch" size={16} />
                      <Text>{formatSecondsToTime(item.duration)}</Text>
                    </View>
                    <View style={{ width: 4 }} />
                    <View style={styles.programMeasurementItem}>
                      <Ionicons name="flame" size={16} />
                      <Text>{item.totalCalories} kCal</Text>
                    </View>
                  </View>
                </View>
              </View>
            )}
            ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.light.backgroundColor,
  },
  header: {
    ...Layout.flexRow.justifyBetweenCenter,
    paddingTop: getStatusBarHeight(),
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  headerGreetings: {
    ...Typo.textMediumBold,
    flex: 1,
  },
  notificationBtn: {
    ...Layout.flexCol.center,
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Themes.light.text.secondary,
  },
  workoutOverallStats: {
    ...Layout.flexRow.justifyBetweenCenter,
    paddingHorizontal: 16,
    marginTop: 8,
  },
  statsItem: {
    ...Layout.flexRow.alignCenter,
    backgroundColor: Themes.light.cardBackground,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    flex: 1,
  },
  statsItemSeparator: {
    width: 1,
    height: 32,
    backgroundColor: Themes.light.color,
    marginHorizontal: 8,
  },
  statsNumber: {
    ...Typo.textLargeBold,
  },
  statsText: {
    ...Typo.textSmallBold,
  },
  homeSection: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    ...Typo.textMediumBold,
    marginBottom: 16,
  },
  mapContainer: {
    ...Layout.flexCol.alignCenter,
    backgroundColor: Themes.light.cardBackground,
    borderRadius: 8,
    width: '100%',
    height: 192,
    padding: 16,
  },
  activityStats: {
    ...Layout.flexRow.justifyBetweenCenter,
    backgroundColor: Themes.light.white,
    paddingHorizontal: 12,
    paddingVertical: 8,
    position: 'absolute',
    bottom: 16,
    borderRadius: 8,
    width: '100%',
  },
  activityStatsItem: {
    ...Layout.flexCol.alignCenter,
  },
  activityStatsNumber: {
    ...Typo.textLargeBold,
    marginTop: 4,
  },
  activityStatsText: {
    ...Typo.textMediumBold,
  },
  activityStatsUnit: {
    ...Typo.textSmallBold,
  },
  programCard: {
    ...Layout.flexRow.alignCenter,
    padding: 8,
    borderRadius: 8,
    backgroundColor: Themes.light.cardBackground,
  },
  programThumbnail: {
    width: 88,
    height: 88,
    borderRadius: 8,
    marginRight: 8,
  },
  programName: {
    ...Typo.textMediumBold,
    color: Themes.light.text.primary,
  },
  programType: {
    ...Typo.textSmallBold,
    color: Themes.light.text.secondary,
    marginTop: 4,
  },
  playBtn: {
    ...Layout.flexCol.center,
    width: 32,
    height: 32,
    borderRadius: 32,
    backgroundColor: Themes.light.border,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  programMeasurementItem: {
    ...Layout.flexRow.alignCenter,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 40,
    backgroundColor: Themes.light.border,
  },
});
