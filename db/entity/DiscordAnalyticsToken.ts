import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import { DiscordServer } from "./DiscordServer";

@Entity({ name: "discord_analytics_token" })
export class DiscordAnalyticsToken {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  guildId: string;

  @Column()
  userId: string;

  @Column({ unique: true })
  token: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ type: "timestamptz" }) // Use UTC timestamps
  expiresAt: Date;

  @ManyToOne((type) => DiscordServer, (server) => server.members)
  discordServer: DiscordServer;
}
