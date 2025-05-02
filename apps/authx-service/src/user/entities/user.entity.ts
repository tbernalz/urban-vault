import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  Length,
} from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { DocumentType } from '../enum/document-type.enum';
import { UserType } from '../enum/user-type.enum';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  @IsNotEmpty()
  @IsString()
  name: string;

  @Column({ type: 'enum', enum: DocumentType })
  @IsEnum(DocumentType)
  documentType: DocumentType;

  @Column({ type: 'varchar', length: 255 })
  @IsNotEmpty()
  @IsString()
  documentNumber: string;

  @Column({ type: 'varchar', length: 5 })
  @IsNotEmpty()
  @IsString()
  countryCode: string;

  @Column({ type: 'varchar', length: 10 })
  @IsPhoneNumber()
  phoneNumber: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  @IsEmail()
  readonly email: string;

  @Column({ type: 'varchar', length: 255, select: false })
  @IsNotEmpty()
  @IsString()
  @Length(8)
  password: string;

  @Column({ type: 'enum', enum: UserType })
  @IsEnum(UserType)
  type: UserType;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;
}
