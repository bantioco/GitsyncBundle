# GitsyncBundle ( Bêta )#

##INSTALL##
##Copie du bundle dans:##
../src/<br/>
<br/>
On ajoute..<br/>
<br/>
Dans ../app/config/routing.yml
<br/>

>gitsync:<br/>
>    ...<br/>
>    resource: "@GitsyncBundle/Controller/"<br/>
>    type:     annotation<br/>
>    prefix:   /<br/>

<br/>

Dans../app/AppKernel.php
<br/>
>AppKernel:<br/>
>    .$bundles = [<br/>
>        ...<br/>
>        new GitsyncBundle\GitsyncBundle(),<br/>
>        ...<br/>
>    ];<br/>

##Terminal:##
>php bin/console doctrine:schema:update --force

##Les routes générées :##
>@Route("/gitsync/config", name="gitsyncconfig")<br/>
>@Route("/gitsync/config/edit/{id}", name="gitsyncconfigedit")<br/>
>@Route("/gitsync/pull", name="gitsyncpull")<br/>
>@Route("/gitsync/commit/view", name="gitsynccommitview")<br/>

##Installation des assets :##
php bin/console asset:install


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
