create database FitProDBtesting
go
use FitProDBtesting
go


CREATE TABLE [dbo].[Users](
[Id] [INT] IDENTITY(1,1) NOT NULL,
[Name] [NVARCHAR] (MAX) NULL,
[Email] [NVARCHAR](MAX) NULL,
[Notes] [NVARCHAR](MAX) NULL)
go

INSERT INTO [dbo].[Users]([Name],[Email],[Notes])
VALUES('BRYAN','BRYANFONSARA30@GMAIL.COM','PRUEBA1')
GO
INSERT INTO [dbo].[Users]([Name],[Email],[Notes])
VALUES('Enrique','Engirs30@GMAIL.COM','fsafsad')
GO
INSERT INTO [dbo].[Users]([Name],[Email],[Notes])
VALUES('Fabricio','Favdsge224@GMAIL.COM','adsff')
GO
INSERT INTO [dbo].[Users]([Name],[Email],[Notes])
VALUES('Monica','Monicadsfsfw232@GMAIL.COM','asfasf')
GO
INSERT INTO [dbo].[Users]([Name],[Email],[Notes])
VALUES('Fernadna','sfgger345@GMAIL.COM','anota4343')
GO
INSERT INTO [dbo].[Users]([Name],[Email],[Notes])
VALUES('Heranda','asfsgdg4335@GMAIL.COM','nota435')
GO
INSERT INTO [dbo].[Users]([Name],[Email],[Notes])
VALUES('BRYAN','BRYANFONSARA30@GMAIL.COM','PRUEBA1')
GO
INSERT INTO [dbo].[Users]([Name],[Email],[Notes])
VALUES('BRYAN','BRYANFONSARA30@GMAIL.COM','PRUEBA1')
GO
INSERT INTO [dbo].[Users]([Name],[Email],[Notes])
VALUES('BRYAN','BRYANFONSARA30@GMAIL.COM','PRUEBA1')
GO
INSERT INTO [dbo].[Users]([Name],[Email],[Notes])
VALUES('BRYAN','BRYANFONSARA30@GMAIL.COM','PRUEBA1')
GO
INSERT INTO [dbo].[Users]([Name],[Email],[Notes])
VALUES('BRYAN','BRYANFONSARA30@GMAIL.COM','PRUEBA1')
GO
INSERT INTO [dbo].[Users]([Name],[Email],[Notes])
VALUES('BRYAN','BRYANFONSARA30@GMAIL.COM','PRUEBA1')
GO
INSERT INTO [dbo].[Users]([Name],[Email],[Notes])
VALUES('BRYAN','BRYANFONSARA30@GMAIL.COM','PRUEBA1')
GO
INSERT INTO [dbo].[Users]([Name],[Email],[Notes])
VALUES('BRYAN','BRYANFONSARA30@GMAIL.COM','PRUEBA1')
GO
INSERT INTO [dbo].[Users]([Name],[Email],[Notes])
VALUES('BRYAN','BRYANFONSARA30@GMAIL.COM','PRUEBA1')
GO
INSERT INTO [dbo].[Users]([Name],[Email],[Notes])
VALUES('BRYAN','BRYANFONSARA30@GMAIL.COM','PRUEBA1')
GO

select * from  [dbo].[Users]
go
