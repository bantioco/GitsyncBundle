# GitsyncBundle ( Bêta )#

##INSTALL##
##Copie du bundle dans:##
`../src/`

`On ajoute..`
`Routing:`
`Dans ../app/config/routing.yml`
`gitsync:`
>    ...
>    resource: "@GitsyncBundle/Controller/"
>    type:     annotation
>    prefix:   /
>
Dans../app/AppKernel.php
AppKernel:
    .$bundles = [
        ...
        new GitsyncBundle\GitsyncBundle(),
        ...
    ];

##Terminal:##
php bin/console doctrine:schema:update --force

##Les routes générées :##
@Route("/gitsync/config", name="gitsyncconfig")
@Route("/gitsync/config/edit/{id}", name="gitsyncconfigedit")
@Route("/gitsync/pull", name="gitsyncpull")
@Route("/gitsync/commit/view", name="gitsynccommitview")


##Module de synchronisation d'un projet symfony avec git##
symfony/gitsync

####1.Config####
Configuration : chemin du depot git
![ScreenShot](https://benjamin.antioco.fr/public/img/gitsync-config.png)
####2.Pull####
Pull : synchronisation des commits
![ScreenShot](https://benjamin.antioco.fr/public/img/gitsync-pull.png)
####3.Commit####
Commit : vue des commits
![ScreenShot](https://benjamin.antioco.fr/public/img/gitsync-view-commit.png)
